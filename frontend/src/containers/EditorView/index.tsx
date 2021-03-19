import React from "react";
import { EditIcon, TrashIcon } from "../../assets/icons";
import { GlobalContext } from "../../Context/GlobalContextState";

function EditorView() {
  const { file } = React.useContext(GlobalContext);

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
          <div className="cursor-pointer border-r p-1">
            {" "}
            <EditIcon size={20} color="blue" />
          </div>
          <div className="w-2/3">
            <input
              type="text"
              className="w-full text-gray-700 font-mono font-semibold outline-none focus:ring-2 focus:ring-blue-50 bg-transparent h-8 m-auto"
              value={file}
              disabled={true}
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
        <div className="my-3">
          EditorView Component
          <div></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default EditorView;
