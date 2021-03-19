import React from "react";
import { InfoIcon } from "../../assets/icons";
import { GlobalContext } from "../../Context/GlobalContextState";
import "./styles.css";

interface IProps {
  title: string;
  closeBind: React.Dispatch<React.SetStateAction<boolean>>;
  type: boolean;
  saveBind: (data: string) => void;
}

function Modal({ title, closeBind, saveBind, type }: IProps) {
  const [newLabel, setnewLabel] = React.useState<string>("");
  const [selectLang, setSelectlang] = React.useState<string>("");
  const { languages } = React.useContext(GlobalContext);

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                <InfoIcon color={"blue"} />
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  {title}
                </h3>
                <div className="my-2">
                  <p className="text-sm text-gray-500">
                    Are you sure you want to add a new label?. After this
                    process you can add snippet files to the label corresonding.
                  </p>
                </div>

                <div className="">
                  <input
                    value={newLabel}
                    onChange={(e) => setnewLabel(e.target.value)}
                    type="text"
                    placeholder="Please provide input"
                    required
                    className="w-full border px-3 focus:ring-2 rounded-lg focus:ring-blue-400 bg-gray-50 py-2 outline-none"
                  />
                </div>
                {type && (
                  <div className="my-2">
                    <div className="flex space-x-2 text-sm">
                      <div className="font-bold">Language: </div>
                      <div>
                        {" "}
                        <select
                          name="chooseLanguages"
                          className="w-32 "
                          value={selectLang}
                          onChange={(e) => setSelectlang(e.target.value)}
                        >
                          {Object.keys(languages).map((lang) => (
                            <option key={lang} value={lang}>
                              {" "}
                              {lang}{" "}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              onClick={() => {
                saveBind(type ? `${newLabel}.${selectLang}` : newLabel);
                closeBind(false);
              }}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => closeBind(false)}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
