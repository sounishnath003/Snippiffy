import React from "react";
import "./App.css";
import { AlertBox, GridView, Header } from "./components";
import { EditorView, FolderBar, SnippetBar } from "./containers";
import { GlobalContextProvider } from "./Context/GlobalContextState";

function App() {
  return (
    <>
      <AlertBox />
      <Header />
      <GlobalContextProvider>
        <GridView>
          <FolderBar />
          <SnippetBar />
          <EditorView />
        </GridView>
      </GlobalContextProvider>
    </>
  );
}

export default App;
