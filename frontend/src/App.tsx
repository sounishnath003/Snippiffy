import React from "react";
import "./App.css";
import { GridView, Header } from "./components";
import { LabelBar, SnippetBar } from "./containers";
import { GlobalContextProvider } from "./Context/GlobalContextState";

function App() {
  return (
    <>
      <Header />
      <GlobalContextProvider>
        <GridView>
          <LabelBar />
          <SnippetBar />
        </GridView>
      </GlobalContextProvider>
    </>
  );
}

export default App;
