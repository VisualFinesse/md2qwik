import { promises } from "fs";
import { join } from "path";

// Function to traverse the directory structure
async function traverseDirectory(dir, prefix = "") {
  const directoryContents = await promises.readdir(dir, {
    withFileTypes: true,
  });
  let structure = "";

  for (const dirent of directoryContents) {
    // Skip the node_modules directory
    if (dirent.name === "node_modules") {
      continue;
    }

    const fullPath = join(dir, dirent.name);
    if (dirent.isDirectory()) {
      structure += `${prefix}- ${dirent.name}\n`;
      structure += await traverseDirectory(fullPath, prefix + "--");
    } else {
      structure += `${prefix}- ${dirent.name}\n`;
    }
  }

  return structure;
}

// Function to write the directory structure to a file
async function exportDirectoryStructure(baseDir, outputFile) {
  try {
    const structure = await traverseDirectory(baseDir);
    await promises.writeFile(outputFile, structure);
    console.log(`Directory structure has been written to ${outputFile}`);
  } catch (error) {
    console.error("Error writing directory structure:", error);
  }
}

// Example usage:
const projectDir = "./";
const outputFilePath = "./directory-structure.txt"; // Output file path
exportDirectoryStructure(projectDir, outputFilePath);
