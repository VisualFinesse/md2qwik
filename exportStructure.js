const fs = require("fs");
const path = require("path");
require("dotenv").config();

// Function to traverse the directory structure
async function traverseDirectory(dir, prefix = "") {
  const directoryContents = await fs.promises.readdir(dir, {
    withFileTypes: true,
  });
  let structure = "";

  // Properly initialize the Set with multiple values
  const jsignore = new Set([
    "node_modules",
    ".git",
    ".gitignore",
    ".env",
    ".env.local",
    "logs",
  ]);

  for (const dirent of directoryContents) {
    if (jsignore.has(dirent.name)) {
      // Use 'has' method for checking Set membership
      continue; // Skip the iteration if the directory is in the ignore list
    }

    const fullPath = path.join(dir, dirent.name);
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
    await fs.promises.writeFile(outputFile, structure);
    console.log(`Directory structure has been written to ${outputFile}`);
  } catch (error) {
    console.error("Error writing directory structure:", error);
  }
}
// Example usage:
// const projectDir = "./markdown"; // Replace with your project directory
// const outputFilePath = "./directory-structure.txt"; // Output file path
// exportDirectoryStructure(projectDir, outputFilePath);

module.exports = { traverseDirectory, exportDirectoryStructure };
