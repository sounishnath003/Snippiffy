import Editor from "@monaco-editor/react";
import React from "react";
import { EditIcon, SaveIcon, TrashIcon } from "../../assets/icons";
import { GlobalContext } from "../../Context/GlobalContextState";

function EditorView() {
  const { file, languages } = React.useContext(GlobalContext);
  const [canEdit, setCanEdit] = React.useState<boolean>(true);
  const [fileInput, setFileInput] = React.useState<string>(file);

  function getLang(): string {
    return languages[file.split(".").pop()];
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
            onClick={() => setCanEdit((e) => !e)}
          >
            {" "}
            {canEdit ? (
              <EditIcon size={20} color="blue" />
            ) : (
              <SaveIcon size={20} color={"red"} />
            )}
          </div>
          <div className="w-2/3">
            <input
              type="text"
              className="w-full text-gray-700 font-mono font-semibold outline-none focus:ring-2 focus:ring-blue-50 bg-transparent h-8 m-auto"
              value={file}
              onChange={(e) => setFileInput(e.target.value)}
              disabled={canEdit}
            />
          </div>
          <div className="w-1/3">
            <div className="flex justify-evenly items-center content-center">
              <div className="rounded-md bg-blue-100 hover:bg-blue-200 px-4 py-1">
                <button>Edit</button>
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
          <Editor height={"100%"} key={file} language={getLang()} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default EditorView;
