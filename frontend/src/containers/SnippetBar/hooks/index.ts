import React from "react";
import { CREATE_SNIPPET_FILE } from "../../../actions";
import { GlobalContext } from "../../../Context/GlobalContextState";

type IUseSnippetBar = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  openModal: boolean;
  label: string;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  addNewSnippet: (data_: string) => void;
  files: string[];
};

export function useSnipperBarHook(): IUseSnippetBar {
  const [searchText, setSearchText] = React.useState<string>("");
  const [openModal, setOpenModal] = React.useState<boolean>(false);

  const { label, dispatch, files } = React.useContext(GlobalContext);

  function addNewSnippet(data_: string) {
    const payload = { label, snippetFile: data_ };

    const mk = async function () {
      const data = await (
        await fetch(`/snippets/create`, {
          method: "POST",
          headers: { "Content-Type": `application/json` },
          body: JSON.stringify(payload),
        })
      ).json();
      if (data.success) {
        console.log({ payload, data });
        dispatch({
          type: CREATE_SNIPPET_FILE,
          payload: { data: data_ },
        });
      }
    };
    mk();
  }

  return {
    searchText,
    setSearchText,
    openModal,
    setOpenModal,
    addNewSnippet,
    files,
    label
  };
}
