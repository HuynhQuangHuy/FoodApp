import React, { useState } from "react";

const checkbox = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(() => {
    return JSON.parse(localStorage.getItem("todo")) ?? [];
  });

  const handleAdd = () => {
    setTodoList((prevTodo) => {
      const newTodo = [todo, ...prevTodo];
      localStorage.setItem("todo", JSON.stringify(newTodo));
      return newTodo;
    });
    setTodo("");
  };

  const handleDelete = (index) => {
    setTodoList((prevList) => {
      prevList.splice(index, 1);
      localStorage.setItem("todo", JSON.stringify([...prevList]));
      return [...prevList];
    });
  };

  return (
    <div style={{ padding: 32 }}>
      <input
        type="text"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todoList.map((todoItem, index) => (
          <div key={index}>
            <li>{todoItem}</li>
            <button onClick={() => handleDelete(index)}>DELETE</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default checkbox;
