import Editor from "@monaco-editor/react";
import React from "react";
import { EditIcon, SaveIcon, TrashIcon } from "../../assets/icons";
import { GlobalContext } from "../../Context/GlobalContextState";

function EditorView() {
  const { snippet, file, languages } = React.useContext(GlobalContext);
  const [canEditFilename, setCanEditFilename] = React.useState<boolean>(false);
  const [canEditCode, setCanEditCode] = React.useState<boolean>(false);
  const [fileInput, setFileInput] = React.useState<string>("");
  const [code, setCode] = React.useState<string>("");

  React.useEffect(() => {
    setFileInput(file);
  }, [file, snippet]);

  function getLang(): string {
    return languages[file.split(".").pop()];
  }

  const options = {
    readOnly: !canEditCode,
  };

  // @save(): to save code user updated
  function save() {
    console.log({code});
  }

  if (file === null) {
    return (
      <React.Fragment>
        <div className="p-2 flex bg-gray-50">
          <div className="m-auto text-sm-">No Snippet File selected!</div>
        </div>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div className="p-2">
        <div className="px-3 h-12 rounded space-x-4 border flex items-center content-center justify-evenly">
          <div
            className="cursor-pointer border-r p-1"
            onClick={() => setCanEditFilename((e) => !e)}
          >
            {" "}
            {canEditFilename ? (
              <SaveIcon size={20} color={"red"} />
            ) : (
              <EditIcon size={20} color="blue" />
            )}
          </div>
          <div className="w-2/3">
            <input
              type="text"
              className="w-full text-gray-700 font-mono font-semibold outline-none focus:ring-2 focus:ring-blue-50 bg-transparent h-8 m-auto"
              value={fileInput || ""}
              onChange={(e) => setFileInput(e.target.value)}
              disabled={!canEditFilename}
            />
          </div>
          <div className="w-1/3">
            <div className="flex justify-evenly items-center content-center">
              <div
                onClick={() => setCanEditCode((e) => !e)}
                className="rounded-md text-sm bg-blue-100 hover:bg-blue-200 px-4 py-1"
              >
                {canEditCode ? <button onClick={save} >Save</button> : <button>Edit</button>}
              </div>
              <div className="rounded-md bg-red-100 hover:bg-red-300 px-4 py-1">
                <button>
                  <TrashIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="my-3 h-screen">
          <Editor
            height={"100%"}
            key={file}
            value={code}
            onChange={(e) => setCode(e)}
            language={getLang()}
            options={options}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default EditorView;
