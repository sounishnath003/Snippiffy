import React from "react";

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
  success: string;
  languages: mapp;
}

export const initialState: IGlobalContextState = {
  labels: [],
  files: [],
  snippet: "",
  error: "",
  success: "",
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
  return (
    <GlobalContext.Provider value={initialState}>
      {children}
    </GlobalContext.Provider>
  );
}
