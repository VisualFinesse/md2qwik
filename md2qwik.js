const readline = require("readline");
const fs = require("fs").promises;
const path = require("path");
const { marked } = require("marked");
const axios = require("axios");
const { traverseDirectory } = require("./exportStructure.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query) {
  return new Promise((resolve) =>
    rl.question(query, (ans) => {
      rl.close();
      resolve(ans);
    })
  );
}

async function findMarkdownDirectory() {
  const directories = await fs.readdir(".", { withFileTypes: true });
  return directories.find((dir) => dir.isDirectory() && dir.name === "markdown")
    ?.name;
}

async function removeSpecifiedDirectoriesAndFiles(projectDir) {
  console.log(`Removing directories from project directory: ${projectDir}`); // Debug: Log the project directory
  const pathsToRemove = [
    path.join(projectDir, "src", "components", "router-head"),
    path.join(projectDir, "src", "components", "starter"),
    path.join(projectDir, "src", "routes", "demo"),
  ];

  for (const fullPath of pathsToRemove) {
    try {
      await fs.access(fullPath); // Check if the path exists
      await fs.rm(fullPath, { recursive: true, force: true });
      console.log(`Successfully removed: ${fullPath}`);
    } catch (err) {
      console.error(`Error processing ${fullPath}: ${err.message}`);
    }
  }
}

async function integrateMarkdownComponents(projectDir) {
  const markdownDir = await findMarkdownDirectory();
  if (!markdownDir) {
    console.log("No markdown directory found.");
    return;
  }
  const componentsDir = path.join(projectDir, "src", "components");
  console.log(
    "Components Directory defined in integrateMarkdownComponents:",
    componentsDir
  );
  await convertMarkdownToComponents(markdownDir, componentsDir);
  await generateLinkTree(componentsDir, path.join(projectDir, "src"));
}

async function convertMarkdownToComponents(markdownDirPath, componentsDir) {
  const entries = await fs.readdir(markdownDirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(markdownDirPath, entry.name);
    if (entry.isDirectory()) {
      const newDir = path.join(componentsDir, entry.name.replace(/\s+/g, "_"));
      await convertMarkdownToComponents(fullPath, newDir);
    } else if (entry.name.endsWith(".md")) {
      const markdown = await fs.readFile(fullPath, "utf8");
      const htmlContent = marked.parse(markdown);
      const componentName = entry.name.replace(/\s+/g, "_").replace(".md", "");
      const componentDir = path.join(componentsDir, componentName);
      const componentPath = path.join(componentDir, `${componentName}.tsx`);
      const componentCSSPath = path.join(componentDir, `${componentName}.css`);

      const componentCode = createComponentCode(htmlContent, componentName);
      await fs.mkdir(componentDir, { recursive: true });
      await fs.writeFile(componentPath, componentCode, "utf8");
      await fs.writeFile(
        componentCSSPath,
        `/* Styles for ${componentName} */`,
        "utf8"
      );
    }
  }
}

function createComponentCode(htmlContent, componentName) {
  return `
import { component$ } from '@builder.io/qwik';

export const ${componentName} = component$(() => {
  return <div innerHTML={'${escapeBackticks(htmlContent)}'}></div>;
});
    `.trim();
}

async function generateLinkTree(componentsDir, srcDir) {
  const components = await gatherComponents(componentsDir);
  const linkTreeComponent = `
import { component$, Resource } from '@builder.io/qwik';
export default component$(() => {
  const components = ${JSON.stringify(components)};
  return <ul>
    {components.map(path => <li><a href={'/' + path.replace('/src/components/', '').replace('.tsx', '')}>{path.split('/').pop().replace('.tsx', '')}</a></li>)}
  </ul>;
});
    `.trim();
  await fs.writeFile(
    path.join(srcDir, "components", "LinkTree.tsx"),
    linkTreeComponent,
    "utf8"
  );
}

async function gatherComponents(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".tsx"))
    .map((entry) => path.join(dir, entry.name));
}

function escapeBackticks(str) {
  return str.replace(/`/g, "\\`");
}

async function modifyRootComponent(componentsDir, srcDir) {
  const components = await gatherComponents(componentsDir);
  const imports = components
    .map((componentPath) => {
      const componentName = path.basename(componentPath, ".tsx");
      return `import { ${componentName} } from './components/${componentName}';`;
    })
    .join("\n");

  const routes = components
    .map((componentPath) => {
      const componentName = path.basename(componentPath, ".tsx");
      return `{ path: '/${componentName}', component: ${componentName} }`;
    })
    .join(",\n");

  const rootComponentCode = `
import { component$, Slot } from '@builder.io/qwik';
import { Router, Route } from '@builder.io/qwik-city';

${imports}

export default component$(() => {
  return (
    <Router>
      <Route path="/" component={Home} />
      ${routes}
      <Slot />
    </Router>
  );
});
  `.trim();

  await fs.writeFile(path.join(srcDir, "root.tsx"), rootComponentCode, "utf8");
  console.log("Root component modified with dynamic routes!");
}

async function removeUnwantedImports(filePath) {
  let fileContent = await fs.readFile(filePath, "utf8");
  const linesToRemove = [
    'import Counter from "../components/starter/counter/counter";',
    'import Hero from "../components/starter/hero/hero";',
    'import Infobox from "../components/starter/infobox/infobox";',
    'import Starter from "../components/starter/next-steps/next-steps";',
  ];
  const newLines = fileContent
    .split("\n")
    .filter((line) => !linesToRemove.includes(line.trim()));
  await fs.writeFile(filePath, newLines.join("\n"), "utf8");
}

async function addNewImports(filePath, componentsDir) {
  const entries = await gatherComponents(componentsDir);
  const imports = entries
    .map((componentPath) => {
      const componentName = path.basename(componentPath, ".tsx");
      return `import ${componentName} from "${componentPath
        .replace(/\\/g, "/")
        .replace(".tsx", "")}";`;
    })
    .join("\n");

  let fileContent = await fs.readFile(filePath, "utf8");
  fileContent = imports + "\n" + fileContent;
  await fs.writeFile(filePath, fileContent, "utf8");
}

async function updateIndexFile(indexPath, componentsDir) {
  let indexContent = await fs.readFile(indexPath, "utf8");

  // Gather all components that might be used
  const components = await gatherComponents(componentsDir);

  // Building new imports section dynamically
  const importStatements = components
    .map((componentPath) => {
      const componentName = path.basename(componentPath, ".tsx");
      return `import ${componentName} from "${componentPath
        .replace(/\\/g, "/")
        .replace(".tsx", "")}";`;
    })
    .join("\n");

  // Rebuilding the index file content
  // This is simplified: in practice, you would need to parse and reconstruct the JSX carefully
  indexContent =
    importStatements + "\n" + indexContent.split("\n").slice(1).join("\n");

  await fs.writeFile(indexPath, indexContent, "utf8");
}

// function extractMetadata(markdownContent) {
// Assuming the first line might be a title or similar
//   const firstLine = markdownContent.split("\n")[0];
//   return {
//     title: firstLine.replace("# ", ""),
//     description: "Description derived from Markdown content",
//   };
// }

async function updateHead(indexPath, markdownContent) {
  const metadata = extractMetadata(markdownContent);
  let content = await fs.readFile(indexPath, "utf8");
  content = content.replace("Welcome to Qwik", metadata.title);
  content = content.replace("Qwik site description", metadata.description);

  await fs.writeFile(indexPath, content, "utf8");
}

async function fetchMetadataFromChatGPT(fileStructure) {
  const prompt = `Please review the file structure and return ONLY the metadata in the following format:

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

File Structure:
${fileStructure}`;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/engines/davinci-codex/completions",
      {
        prompt: prompt,
        max_tokens: 2000,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("Failed to fetch metadata from ChatGPT:", error);
    return null;
  }
}

async function updateIndexTSX(indexPath, metadata) {
  const content = `import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

${metadata}

export default component$(() => {
  // Your component rendering logic here
});

const head: DocumentHead = headMetadata; // Assuming metadata is formatted to fit this use`;

  fs.writeFileSync(indexPath, content);
}

async function main() {
  const projectDir = await askQuestion(
    "Enter the path to your Qwik project directory: "
  );
  if (!projectDir) {
    console.error("No project directory provided. Exiting.");
    return;
  }
  const indexPath = path.join(projectDir, "src", "routes", "index.tsx");
  const componentsDir = path.join(projectDir, "src", "components");
  const srcDir = path.join(projectDir, "src");

  console.log("defined in main: Components Directory:", componentsDir);
  console.log("defined in main: Src Directory:", srcDir);

  await removeSpecifiedDirectoriesAndFiles(projectDir.trim());
  await integrateMarkdownComponents(projectDir.trim());
  await removeUnwantedImports(indexPath);
  await addNewImports(indexPath, componentsDir);
  await modifyRootComponent(componentsDir, srcDir);
  await updateIndexFile(indexPath, componentsDir);
  await updateHead(indexPath, markdownContent);
  await fetchMetadataFromChatGPT(await traverseDirectory("./markdown"));
  await updateIndexTSX(indexPath, metadata);
}

main();
