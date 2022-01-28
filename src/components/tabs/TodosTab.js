import React, { useState } from "react";

function Todos(props) {
  const [input, setInput] = useState("");

  let addtodo = (e) => { 
    e.preventDefault()
    if (input !== "") {
      let todos = props.todos;
      todos = todos.push(input);
      props.setTodos(todos);
      setInput("");
    }
  };
  console.log("tab1 rendred", props);
  return (
    <div>
     <h1> Todos Tab</h1>
     <form onSubmit={addtodo}>
     <input
        type={"text"}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button  type="submit">Add</button>
     </form>
     
      {props.todos.length !== 0 &&
        props.todos.map((todo, i) => {
          return <p key={i}>{todo}</p>;
        })}
    </div>
  );
}

export default Todos;
