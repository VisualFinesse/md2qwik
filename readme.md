# Markdown to Qwik Converter

This script automates the process of converting a directory of markdown files into a Qwik project. It dynamically creates Qwik components for each markdown file, maintaining the directory structure in the components folder. The script also generates a link tree for easy navigation among the created components.

## Features

- **Recursive Processing**: Handles directories and subdirectories recursively.
- **Component Generation**: Generates Qwik components for each markdown file.
- **Escaping Backticks**: Ensures backticks in markdown content are escaped to prevent syntax errors.
- **Link Tree Creation**: Generates a navigation component that links to all generated Qwik components.

## Prerequisites

- **Node.js**: The script requires Node.js to be installed on your machine.
- **NPM**: Node Package Manager (NPM) must be installed to handle dependencies.

## Setup

1. **Clone or download this repository** to your local machine.
2. **Navigate to the root directory** of the repository in your terminal.
3. **Ensure the markdown directory**: This script assumes that there is only one directory in the root which will be used as the markdown source directory.
4. install project dependencies:
    ```cmd
   npm install
    ```
5. Create your qwik application:
    ```cmd
   npm create qwik@latest
    ```
    Walk through the prompts to create name and create your qwik project. Choose "basic" from the options.


## Usage

1. **Run the script**:
   ```bash
   node md2qwik.js "./qwik-project-directory-name-here"
    ```
 This command will execute the script which performs the following steps:

    Detects the markdown directory and uses its name for the Qwik project.
    Creates a new Qwik project.
    Installs necessary dependencies.
    Converts all markdown files into Qwik components.
    Generates a link tree component for navigation.
    Builds and starts the Qwik project.