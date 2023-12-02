import { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item"> New Item </label>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type="text"
            id="item"
          />
        </div>
        <button className="btn"> Add </button>
      </form>
      <h1 className="header"> Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item1
          </label>
          <button className="btn btn-danger"> Delete</button>
        </li>
      </ul>
    </>
  );
};

export default App;
