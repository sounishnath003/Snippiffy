import React from "react";
import { AddIcon } from "../../assets/icons";
import { Modal } from "../../components";

function SnippetBar() {
  const [searchText, setSearchText] = React.useState<string>("");
  const [openModal, setOpenModal] = React.useState<boolean>(false);

  function addNewLabelFunc(payload: string) {}

  return (
    <React.Fragment>
      <div className="min-h-screen border-r bg-blue-50">
        <div className="flex px-2 py-2 justify-between w-full border-b">
          <div>
            <span className="text-sm font-semibold uppercase">Snippets</span>
          </div>
          <div onClick={() => setOpenModal(true)}>
            <AddIcon />
          </div>
        </div>
        {/* if no label is selected */}
        {/* <div className="text-xl m-auto px-3">
          <div className="font-sm">Select a Label</div>
        </div> */}
        <div className="-relative m-2">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value.toLowerCase())}
            placeholder="search for snippets..."
            className="px-4 py-1 w-full relative text-sm outline-none rounded bg-gray-300 opacity-70 overflow-hidden"
          />
        </div>
      </div>

      {openModal && (
        <Modal
          title={"Add a snippet"}
          type={true}
          closeBind={setOpenModal}
          saveBind={addNewLabelFunc}
        />
      )}
    </React.Fragment>
  );
}

export default SnippetBar;
