import React from "react";
import { AddIcon } from "../../assets/icons";
import { Modal } from "../../components";
import { useFolderBarHook } from "./hooks";

const FolderBar: React.FC = () => {
  const {
    addNewLabelFunc,
    labels,
    onLabelSelected,
    openModal,
    searchText,
    setOpenModal,
    setSearchText,
  } = useFolderBarHook();

  return (
    <React.Fragment>
      <aside
        className="uppercase p-3 inline-flex min-h-screen tracking-wide overflow-y-auto"
        style={{ backgroundColor: `rgb(1 1 33)`, color: `#fff` }}
      >
        <div className="w-full">
          <div className="flex justify-between border-b border-gray-600">
            <div>
              <span className="text-sm ">Folders</span>
            </div>

            <div onClick={() => setOpenModal(true)}>
              <AddIcon color={"white"} />
            </div>
          </div>

          {labels
            .filter((label) => label.toLowerCase().includes(searchText))
            .map((label, index) => (
              <div
                key={index}
                className=" my-3 text-sm text-gray-500 normal-case"
              >
                <div
                  className="h-6 cursor-pointer my-2"
                  onClick={() => onLabelSelected(index)}
                >
                  <div className="hover:text-gray-300">{label} </div>
                </div>
              </div>
            ))}

          <div className="-relative -ml-1 mb-2">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value.toLowerCase())}
              placeholder="search for labels..."
              className="px-4 py-1 w-full relative text-sm outline-none rounded bg-gray-700 opacity-70 overflow-hidden"
            />
          </div>
        </div>
      </aside>

      {openModal && (
        <Modal
          title={"Add a label"}
          type={false}
          closeBind={setOpenModal}
          saveBind={addNewLabelFunc}
        />
      )}
    </React.Fragment>
  );
};

export default FolderBar;
