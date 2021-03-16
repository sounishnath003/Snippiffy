import React from "react";
import { FileIcon } from "../../assets/icons";

function EditorView() {
  return (
    <React.Fragment>
      <div className="p-2">
        <div className="px-3 h-12 rounded space-x-4 bg-blue-50 flex items-center content-center justify-evenly">
          <div className="">
            {" "}
            <FileIcon size={24} />{" "}
          </div>
          <div className="w-2/3">
            <input
              type="text"
              className="w-full text-gray-700 font-mono font-semibold outline-none focus:ring-2 focus:ring-blue-50 bg-transparent h-8 m-auto"
              value="demo-file.rb"
              disabled={true}
            />
          </div>
          <div className="w-1/3">3</div>
        </div>
        <div className="text-xl">EditorView Component</div>
      </div>
    </React.Fragment>
  );
}

export default EditorView;
