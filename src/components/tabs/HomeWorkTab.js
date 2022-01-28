import React, { useState } from "react";

function HomeWork(props) {
  const [input, setInput] = useState("");

  let addHomeWork = () => {
    if (input !== "") {
      let homeWork = props.homeWork;
      homeWork = homeWork.push(input);
      props.setHomeWork(homeWork);
      setInput("");
    }
  };
  return (
    <div>
      <h1> Home Work Tab</h1>
      <input
        type={"text"}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addHomeWork}>Add</button>
      {props.homeWork.length !== 0 &&
        props.homeWork.map((todo, i) => {
          return <p key={i}>{todo}</p>;
        })}
    </div>
  );
}

export default HomeWork;
