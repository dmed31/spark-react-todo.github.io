import React from 'react';
import {useState} from "react";
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";




function App() {


  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }



  const[todos,setTodos] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <div id="headers">
        <h2>LET'S GET STUFF DONE &hearts;</h2>
        <p>Enter a Todo!</p>
        </div>
        <TodoForm addTodo={addTodo}/>
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      </header>
    </div>
  );
}

export default App;
