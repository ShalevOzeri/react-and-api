# React and JavaScript Setup Guide

This guide explains how to create and run a new React project with JavaScript
from an empty project folder.

## 1. Check the required tools

Open PowerShell or the VS Code terminal and run:

```powershell
node --version
npm --version
```

If both commands print a version number, Node.js and npm are available.

If a command is not recognized, install Node.js from:

https://nodejs.org/

Restart VS Code after installing Node.js.

## 2. Open the projects folder

Move to the folder where you want to create the project:

```powershell
cd C:\Users\shale\Desktop\projects
```

Check the current location:

```powershell
Get-Location
```

The output should point to the projects folder.

## 3. Create a React project with JavaScript

Run:

```powershell
npm create vite@latest inmanage-react
```

When Vite asks questions, choose:

```text
Framework: React
Variant: JavaScript
```

If Vite asks which linter to use, choose:

```text
Oxlint
```

Do not choose:

```text
Vanilla
```

Do not choose:

```text
TypeScript
```

The project is created inside:

```text
C:\Users\shale\Desktop\projects\inmanage-react
```

## 4. Enter the project folder

Run:

```powershell
cd C:\Users\shale\Desktop\projects\inmanage-react
```

This step is important. npm commands must be run from the folder that contains
the project's `package.json` file.

Check that the file exists:

```powershell
Get-ChildItem package.json
```

## 5. Install dependencies

Run:

```powershell
npm install
```

This reads `package.json` and installs React, React DOM, Vite, and the
development tools required by the project.

The command creates a folder named:

```text
node_modules
```

Do not edit files inside `node_modules`.

## 6. Start the development server

Run:

```powershell
npm run dev
```

For a Vite project, use `npm run dev`. Do not use `npm start` unless the
project's `package.json` explicitly defines a `start` script.

Vite prints a local address, usually:

```text
http://localhost:5173/
```

Open the printed address in a browser.

The port may be different, such as `5174`, if another process is already using
the default port. This is normal.

Keep the terminal open while the development server is running.

## 7. Open the project in VS Code

Open a second terminal and run:

```powershell
cd C:\Users\shale\Desktop\projects\inmanage-react
code .
```

If the `code` command is unavailable, open VS Code manually and choose:

```text
File > Open Folder
```

Then select:

```text
C:\Users\shale\Desktop\projects\inmanage-react
```

## 8. Expected project structure

After setup, the important files are:

```text
inmanage-react/
├── index.html
├── package.json
├── package-lock.json
├── node_modules/
└── src/
    ├── App.jsx
    ├── App.css
    └── main.jsx
```

Create application components inside:

```text
src/components/
```

For example:

```text
src/components/MovieCard.jsx
src/components/MovieGrid.jsx
```

## 9. Verify the setup

From the project folder, run:

```powershell
npm run build
```

If the command finishes successfully, the project can be built for production.

If the project contains Oxlint, you can also run:

```powershell
npm run lint
```

## 10. Common mistakes

### Running npm from the wrong folder

This error:

```text
Missing script: "dev"
```

often means the terminal is not inside the React project folder.

Fix it with:

```powershell
cd C:\Users\shale\Desktop\projects\inmanage-react
npm run dev
```

The terminal prompt should end with:

```text
...\inmanage-react>
```

If it ends with:

```text
...\projects>
```

you are one folder too high.

### Choosing the wrong template

For this exercise, the correct choices are:

```text
React
JavaScript
```

`Vanilla` creates a project without React.

`TypeScript` creates `.ts` and `.tsx` files instead of the JavaScript files
used in this exercise.

### Starting a second server accidentally

If one Vite server is already running, do not start another one unless needed.

To stop a server, focus its terminal and press:

```text
Ctrl + C
```

## 11. Connect the project to GitHub

Run these commands from the project folder:

```powershell
git init -b main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git add .
git commit -m "Initial React project"
git push -u origin main
```

Replace the repository URL with your own GitHub repository URL.

For later changes:

```powershell
git status
git add .
git commit -m "Describe the change"
git push
```

The `.gitignore` file should exclude generated folders such as:

```text
node_modules
dist
```

Do not commit passwords, API keys, or other secrets.

## Complete setup sequence

For a new project, the complete sequence is:

```powershell
cd C:\Users\shale\Desktop\projects
npm create vite@latest inmanage-react
cd C:\Users\shale\Desktop\projects\inmanage-react
npm install
npm run dev
```
