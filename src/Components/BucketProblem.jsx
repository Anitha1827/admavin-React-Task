import { useState } from "react";
import "./BucketProblem.css";

function BucketProblem() {
  const [bucket1, setBucket1] = useState([
    "item 1",
    "item 2",
    "item 3",
    "item 4",
    "item 5",
  ]);
  const [bucket2, setBucket2] = useState(["item 6", "item 7"]);
  const [selected, setSelected] = useState([]);

  // Add functionality
  const Add = () => {
    if (selected.length === 0) {
      alert("please select at least one item to add");
      return;
    }
    const b1 = [];
    const b2 = [];
    bucket1.map((val) => {
      if (!selected.includes(val)) {
        b1.push(val);
      } else {
        b2.push(val);
      }
    });
    setBucket1(b1);
    setBucket2([...bucket2, ...b2]);
    setSelected([]);
  };

  // Remove functionality
  const Remove = () => {
    if (selected.length === 0) {
      alert("please select at least one item to remove");
      return;
    }
    const b1 = [];
    const b2 = [];
    bucket2.map((val) => {
      if (selected.includes(val)) {
        b1.push(val);
      } else {
        b2.push(val);
      }
    });
    setBucket1([...bucket1, ...b1]);
    setBucket2(b2);
    setSelected([]);
  };

  const select = ({ item }) => {
    if (selected.includes(item)) {
      const temp = selected.filter((val) => {
        if (val !== item) {
          return val;
        }
      });
      setSelected(temp);
    } else {
      if (selected.length > 0) {
        if (bucket1.includes(selected[0]) && bucket1.includes(item)) {
          setSelected([...selected, item]);
        } else if (bucket2.includes(selected[0]) && bucket2.includes(item)) {
          setSelected([...selected, item]);
        } else {
          alert("please select on same bucket");
        }
      } else {
        setSelected([...selected, item]);
      }
    }
  };

  // Add All functionality
  const addall = () => {
    setBucket2([...bucket2, ...bucket1]);
    setBucket1([]);
  };

  // Remove all functionality
  const removeall = () => {
    setBucket1([...bucket1, ...bucket2]);
    setBucket2([]);
  };

  return (
    <>
      <h1 className="header">Problem 1 - Element Transfer</h1>
      <div className="App">
        {/* bucket1 */}
        <div className="bucket1container">
          <h1>Bucket1</h1>
          <div className="bucket1">
            {bucket1.map((val, ind) => (
              <p
                key={ind}
                className={`value ${selected.includes(val) ? "selected" : ""}`}
                onClick={() => select({ item: val })}
              >
                {val}
              </p>
            ))}
          </div>
        </div>
        {/* Buttons */}
        <div className="buttons">
          <button className="btn" onClick={Add}>
            Add
          </button>
          <button className="btn" onClick={Remove}>
            Remove
          </button>
          <button className="btn" onClick={addall}>
            Add All
          </button>
          <button className="btn" onClick={removeall}>
            Remove All
          </button>
        </div>
        {/* Bucket2 */}
        <div className="bucket2container">
          <h1>Bucket2</h1>
          <div className="bucket2">
            {bucket2.map((val, ind) => (
              <p
                key={ind}
                className={`value ${selected.includes(val) ? "selected" : ""}`}
                onClick={() => select({ item: val })}
              >
                {val}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BucketProblem;
