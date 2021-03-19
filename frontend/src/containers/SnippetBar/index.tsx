import React from "react";
import { OPEN_SNIPPET_FILE } from "../../actions";
import { AddIcon } from "../../assets/icons";
import { Modal } from "../../components";
import { useSnipperBarHook } from "./hooks";

function SnippetBar() {
  const {
    addNewSnippet,
    files,
    openModal,
    searchText,
    setOpenModal,
    setSearchText,
    label,
    dispatch,
  } = useSnipperBarHook();

  return (
    <React.Fragment>
      <aside className="min-h-screen border-r bg-blue-50">
        <div className="flex px-2 py-2 justify-between w-full border-b">
          <div>
            <span className="text-sm font-semibold uppercase">
              {" "}
              Snippets: <span className="text-blue-700">{label}</span>
            </span>
          </div>
          {label && (
            <div onClick={() => setOpenModal(true)}>
              <AddIcon />
            </div>
          )}
        </div>
        {label && (
          <>
            {" "}
            <div className="px-3 my-3">
              <div className="flex-flex-col text-sm justify-start items-center content-center">
                {files
                  .filter((data) => data.toLowerCase().includes(searchText))
                  .map((file, index) => (
                    <div
                      onClick={() =>
                        dispatch({
                          type: OPEN_SNIPPET_FILE,
                          payload: { data: file },
                        })
                      }
                      className="text-left px-2 py-1 rounded-md hover:text-blue-800  my-2 hover:bg-gray-200 cursor-pointer"
                      key={index}
                    >
                      {" "}
                      {file}{" "}
                    </div>
                  ))}
              </div>
            </div>
            <div className="-relative m-2">
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value.toLowerCase())}
                placeholder="search for snippets..."
                className="px-4 py-1 w-full relative text-sm outline-none rounded bg-gray-300 opacity-70 overflow-hidden"
              />
            </div>{" "}
          </>
        )}

        {/* if no label is selected */}
        {!label && (
          <div className="text-sm my-10 text-center">Select a Folder</div>
        )}
      </aside>

      {openModal && (
        <Modal
          title={"Add a snippet"}
          type={true}
          closeBind={setOpenModal}
          saveBind={addNewSnippet}
        />
      )}
    </React.Fragment>
  );
}

export default SnippetBar;
