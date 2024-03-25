import React, { useEffect, useState } from "react";
import "./NestedList.css";
import NestedListData from "./NestedListData.json";

const NestedList = () => {
  const [list, setList] = useState([]);
  const [folder, setFolder] = useState(NestedListData);

  useEffect(() => {
    let temp = [];
    for (var val in folder) {
      temp.push(val);
    }
    setList(temp);
  }, [folder]);

  const OpenFolder = ({ file }) => {
    setFolder(folder[file]);
    console.log("Updating", folder[file]);
  };
  console.log("currentFolder", folder);

  return (
    <>
      <h1 className="header">Problem 2 - Nested List component</h1>

      <div className="nested-container">
        <div className="folder">
          <button className="home" onClick={() => setFolder(NestedListData)}>
            Goto Home
          </button>
          {list.length > 0 ? (
            list.map((val, idx) => (
              <p
                key={idx}
                className="files"
                onClick={() => OpenFolder({ file: val })}
              >
                {val}
              </p>
            ))
          ) : (
            <p>Empty file</p>
          )}
        </div>
      </div>
    </>
  );
};

export default NestedList;
