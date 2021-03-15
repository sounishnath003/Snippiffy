import React from "react";
import { LOAD_ALL_LABEL } from "../actions";
import { globalStateReducer, IAction } from "../Reducer/globalStateReducer";

type mapp = {
  js: string;
  jsx: string;
  ts: string;
  tsx: string;
  cpp: string;
  java: string;
  c: string;
  html: string;
  css: string;
  py: string;
};

export interface IGlobalContextState {
  labels: string[];
  files: string[];
  snippet: string;
  error: string;
  dispatch: React.Dispatch<IAction>;
  success: string;
  languages: mapp;
}

export const initialState: IGlobalContextState = {
  labels: [],
  files: [],
  snippet: "",
  error: "",
  success: "",
  dispatch: (value: IAction) => {},
  languages: {
    c: "c",
    cpp: "cpp",
    css: "css",
    html: "html",
    java: "java",
    js: "js",
    jsx: "Javascript React",
    py: "python",
    ts: "Typescript",
    tsx: "Typescript React",
  },
};

export const GlobalContext = React.createContext(initialState);

export function GlobalContextProvider({ children }: any) {
  const [state, dispatch] = React.useReducer(globalStateReducer, initialState);

  React.useEffect(() => {
    const mk = async function() {
      const rawResp = await fetch('/labels');
      const data = await rawResp.json();
      dispatch({type: LOAD_ALL_LABEL, payload: {data}})
    }
    mk();
  }, [])

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
