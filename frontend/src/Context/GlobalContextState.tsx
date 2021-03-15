import React from "react";
import { LOAD_ALL_LABEL, SET_ERROR, SET_LOADING } from "../actions";
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
  loading: boolean;
  snippet: string;
  error: string;
  dispatch: React.Dispatch<IAction>;
  success: string;
  languages: mapp;
  label: string;
}

export const initialState: IGlobalContextState = {
  loading: false,
  labels: [],
  files: [],
  snippet: "",
  label: "",
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
    const mk = async function () {
      try {
        dispatch({ type: SET_LOADING, payload: {} });
        const rawResp = await fetch("/labels");
        const data = await rawResp.json();
        dispatch({ type: LOAD_ALL_LABEL, payload: { data } });
      } catch (error) {
        dispatch({ type: SET_ERROR, payload: { error } });
      }
    };
    mk();
  }, []);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
