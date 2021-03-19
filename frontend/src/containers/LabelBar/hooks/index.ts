import React from "react";
import { ADD_NEW_LABEL, ON_LABEL_SELECTED, SET_ERROR } from "../../../actions";
import { GlobalContext } from "../../../Context/GlobalContextState";

type IFolderHook = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  addNewLabelFunc: (data: string) => Promise<void>;
  onLabelSelected: (index: number) => Promise<void>;
  labels: string[];
};

export function useFolderBarHook(): IFolderHook {
  const [searchText, setSearchText] = React.useState<string>("");
  const [openModal, setOpenModal] = React.useState<boolean>(false);

  const { labels, dispatch } = React.useContext(GlobalContext);

  async function addNewLabelFunc(data: string) {
    try {
      const rawResp = await fetch("/labels/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ label: data }),
      });
      const resp = await rawResp.json();
      if (resp.success === false) {
        throw new Error();
      }
      if (resp.success) {
        dispatch({ type: ADD_NEW_LABEL, payload: data });
      }
    } catch (err) {
      dispatch({ type: SET_ERROR, payload: { error: `server not working` } });
    }
  }

  async function onLabelSelected(index: number) {
    const selectedLabel = labels[index];
    const data = await (await fetch(`/labels/${selectedLabel}`)).json();

    dispatch({
      type: ON_LABEL_SELECTED,
      payload: { data: { selectedLabel, files: data.files } },
    });
  }

  return {
    searchText,
    setSearchText,
    openModal,
    setOpenModal,
    addNewLabelFunc,
    onLabelSelected,
    labels,
  };
}
