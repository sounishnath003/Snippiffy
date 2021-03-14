import React from "react";
import "./App.css";
import { GridView, Header } from "./components";
import { LabelBar, SnippetBar } from "./containers";


function App() {
  return (
    <>
      <Header />
      <GridView>
        <LabelBar />
        <SnippetBar />
      </GridView>
    </>
  );
}

export default App;
