import React from "react";
import "./App.css";
import { GridView, Header } from "./components";
import { FolderBar, SnippetBar } from "./containers";
import { GlobalContextProvider } from "./Context/GlobalContextState";

function App() {
  return (
    <>
      <Header />
      <GlobalContextProvider>
        <GridView>
          <FolderBar />
          <SnippetBar />
        </GridView>
      </GlobalContextProvider>
    </>
  );
}

export default App;
