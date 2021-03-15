import React from "react";
import { ADD_NEW_LABEL } from "../../actions";
import { AddIcon } from "../../assets/icons";
import { Modal } from "../../components";
import { GlobalContext } from "../../Context/GlobalContextState";

const FolderBar: React.FC = () => {
  const [searchText, setSearchText] = React.useState<string>("");
  const [openModal, setOpenModal] = React.useState<boolean>(false);

  const { labels, dispatch} = React.useContext(GlobalContext);
  

  async function addNewLabelFunc(data: string) {
    const rawResp = await fetch("/labels/create", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({label: data}),
    });
    const resp = await rawResp.json();
    if (resp.success) {
      dispatch({type: ADD_NEW_LABEL, payload: data})
    }
  }

  return (
    <React.Fragment>
      <aside
        className="uppercase p-3 inline-flex min-h-screen tracking-wide overflow-y-auto"
        style={{ backgroundColor: `#07223a`, color: `#fff` }}
      >
        <div className="w-full">
          <div className="flex justify-between border-b border-gray-600">
            <div>
              <span className="text-sm ">Labels</span>
            </div>

            <div onClick={() => setOpenModal(true)}>
              <AddIcon color={"white"} />
            </div>
          </div>

          {labels
            .filter((label) => label.toLowerCase().includes(searchText))
            .map((label) => (
              <div className=" my-3 text-sm text-gray-500 normal-case">
                <div className="h-6 cursor-pointer my-2">
                  <div className="hover:text-gray-400">{label} </div>
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
