import React from "react";
import Todo from "./Todo";
 
 function TodoList({ todos, removeTodo, toggleComplete }) {
  return (
    <ul>
      {todos.map(todo => (
        <div id="stickynote">
        <Todo
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
        </div>
      ))}
    </ul>
  );
 }
 
 export default TodoList;