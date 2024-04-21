const readline = require("readline");
const fs = require("fs").promises;
const path = require("path");
const { marked } = require("marked");

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

async function clearBoilerplate(projectDir) {
  // Path to the default Qwik boilerplate components and routes
  const componentsPath = path.join(projectDir, "src", "routes");
  const defaultComponents = ["home", "about", "settings"];

  // Remove each default component directory
  for (const component of defaultComponents) {
    await fs.rm(path.join(componentsPath, component), {
      recursive: true,
      force: true,
    });
  }

  // Clear the default root route file if needed
  const rootRoutePath = path.join(componentsPath, "root.tsx");
  if (await fileExists(rootRoutePath)) {
    await fs.unlink(rootRoutePath);
  }
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function integrateMarkdownComponents(projectDir) {
  const markdownDir = await findMarkdownDirectory();
  if (!markdownDir) {
    console.log("No markdown directory found.");
    return;
  }

  const componentsDir = path.join(projectDir, "src", "components");
  await clearBoilerplate(projectDir);
  await convertMarkdownToComponents(markdownDir, componentsDir);
  await generateLinkTree(componentsDir, path.join(projectDir, "src"));
  console.log("Markdown integration completed!");
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
      const componentPath = path.join(componentsDir, `${componentName}.tsx`);
      const componentCode = createComponentCode(htmlContent, componentName);
      await fs.mkdir(componentsDir, { recursive: true });
      await fs.writeFile(componentPath, componentCode, "utf8");
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

async function main() {
  const projectDir = await askQuestion(
    "Enter the path to your Qwik project directory: "
  );
  await integrateMarkdownComponents(projectDir.trim());
}

main();
