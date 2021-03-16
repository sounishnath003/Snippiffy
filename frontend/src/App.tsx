import React from "react";
import "./App.css";
import { AlertBox, GridView, Header } from "./components";
import { EditorView, FolderBar, SnippetBar } from "./containers";
import { GlobalContext, GlobalContextProvider } from "./Context/GlobalContextState";

function App() {
  const {success, error} = React.useContext(GlobalContext);
  React.useEffect(() => {
    console.log({ success, error });
  }, [success, error])
  
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
