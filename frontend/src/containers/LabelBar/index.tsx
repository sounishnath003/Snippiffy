import React from "react";
import { AddIcon } from "../../assets/icons";

const states = [
  { id: 1, label: "TypeScript" },
  { id: 2, label: "JavaScript" },
  { id: 3, label: "Go Lang" },
];

const LabelBar: React.FC = () => {
  const [searchText, setSearchText] = React.useState<string>("");

  return (
    <aside
      className="uppercase p-3  inline-flex min-h-screen tracking-wide w-52"
      style={{ backgroundColor: `#07223a`, color: `#fff` }}
    >
      <div className="w-full">
        <div className="flex justify-between border-b border-gray-600">
          <div>
            <span className="text-sm ">Labels</span>
          </div>

          <div>
            <AddIcon color={"white"} />
          </div>
        </div>

        {states
          .filter((label) => label.label.toLowerCase().includes(searchText))
          .map((state) => (
            <div className=" my-3 text-sm text-gray-500 normal-case">
              <div className="h-6 cursor-pointer my-2">
                <div className="hover:text-gray-400">{state.label} </div>
              </div>
            </div>
          ))}

        <div className="bottom-0 absolute -ml-1 mb-2">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value.toLowerCase())}
            placeholder="search for labels..."
            className="px-4 py-1 w-full text-sm rounded bg-gray-700 opacity-70 overflow-hidden"
          />
        </div>
      </div>
    </aside>
  );
};

export default LabelBar;
