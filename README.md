# Snippiffy ~ A React Snippet Mgmt Tool

This app is highly influenced reactiveX packed **snipiffy magemnent tool**. Which helps developers not only have the sneak peak of the snippets they have loaded; but also modify in browser using the **VSCODE browser editor** plugin. 💖

## Project Structure 🙌

- Backend
  The backend folders contains the business logics of **Node.TS** backend which used in-device storage.
- Frontend
  React powered frontend application with **3-col** grid feature which opens fold by fold like any books page.

<br>

## How To Boot Up The App? 🦝

For booting up the whole application I have already added `concurrently` modules helps to run `server` and `client` side by side or specifically goes hand by hand from just a **single command**.
The Command to start the app is written down below: -

```bash
# For Product Ready Server
yarn dev

# For Development Server
yarn start
```

- Concurrently Splitted part

```bash
    "scripts": {
        "start": "concurrently -m=3 \"yarn start:backend\" \"&&\" \"yarn start:frontend\"",
        "dev": "concurrently -m=3 \"yarn start:backend\" \"&&\" \"yarn start:frontend\"",
        "start:frontend": "cd frontend && yarn start",
        "start:backend": "cd backend && yarn dev"
    },

```

<br>

## Dependencies Description ✌

- Backend Dependentices

  ```bash
  {
      "dependencies": {
          "@types/express": "^4.17.11",
          "@types/express-fileupload": "^1.1.6",
          "@types/morgan": "^1.9.2",
          "@types/node": "^14.14.34",
          "express": "^4.17.1",
          "express-fileupload": "^1.2.1",
          "morgan": "^1.10.0",
          "ts-node": "^9.1.1",
          "typescript": "^4.2.3"
      }
  }
  ```

- Frontend Dependencies
  ```bash
  {
      "dependencies": {
          "@craco/craco": "^6.1.1",
          "@testing-library/jest-dom": "^5.11.4",
          "@testing-library/react": "^11.1.0",
          "@testing-library/user-event": "^12.1.10",
          "@types/jest": "^26.0.15",
          "@types/node": "^12.0.0",
          "@types/react": "^17.0.0",
          "@types/react-dom": "^17.0.0",
          "react": "^17.0.1",
          "react-dom": "^17.0.1",
          "react-scripts": "4.0.3",
          "typescript": "^4.1.2",
          "web-vitals": "^1.0.1"
      }
  }
  ```

## Features - WIP 😊

- Folder Basis

  - Add Folder
  - Delete Folder
  - Rename Folder

- Files Basis

  - Add Snippet File
  - Delete Snippet File
  - Rename Snippet File
  - Write code in the file

- VsCode Editor Support (|MONACO|)
- Intellisense support
- In browser IDE features
- Shareable Snippets to Others
