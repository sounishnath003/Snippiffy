import React from "react";
import { LOAD_ALL_LABEL, SET_ERROR, SET_LOADING } from "../actions";
import { globalStateReducer, IAction } from "../Reducer/globalStateReducer";

type mapp = {
  coffee: string;
  h: string;
  bat: string;
  clj: string;
  cpp: string;
  c: string;
  cs: string;
  csp: string;
  dockerfile: string;
  fs: string;
  go: string;
  graphql: string;
  handlebars: string;
  html: string;
  java: string;
  js: string;
  jsx: string;
  json: string;
  lua: string;
  md: string;
  php: string;
  ps1: string;
  pug: string;
  py: string;
  r: string;
  rb: string;
  rs: string;
  swift: string;
  ts: string;
  tsx: string;
  xml: string;
  yaml: string;
  css: string;
  less: string;
  scss: string;
  txt: string;
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
  file: string | null;
}

export const initialState: IGlobalContextState = {
  loading: false,
  labels: [],
  file: null,
  files: [],
  snippet: "",
  label: "",
  error: "",
  success: "",
  dispatch: (value: IAction) => {},
  languages: {
    coffee: "coffeescript",
    h: "objective-c",
    bat: "bat",
    clj: "clojure",
    cpp: "cpp",
    c: "c",
    cs: "csharp",
    csp: "csp",
    dockerfile: "dockerfile",
    fs: "fsharp",
    go: "go",
    graphql: "graphql",
    handlebars: "handlebars",
    html: "html",
    java: "java",
    js: "javascript",
    jsx: "javascript-react",
    json: "json",
    lua: "lua",
    md: "markdown",
    php: "php",
    ps1: "powershell",
    pug: "pug",
    py: "python",
    r: "r",
    rb: "ruby",
    rs: "rust",
    swift: "swift",
    ts: "typescript",
    tsx: "typescript-react",
    xml: "xml",
    yaml: "yaml",
    css: "css",
    less: "less",
    scss: "scss",
    txt: "text",
  },
};

export const GlobalContext = React.createContext(initialState);

export function GlobalContextProvider({ children }: any) {
  const [state, dispatch] = React.useReducer(globalStateReducer, initialState);

  React.useEffect(() => {
    const mk = async function () {
      try {
        dispatch({ type: SET_LOADING, payload: {} });
        const rawResp = await fetch("/api/labels");
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
