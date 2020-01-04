import React from 'react';
import {useState} from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const [getTodos, setTodos] = useState(['Learn React', 'Buy milk'])
  return (
    <>
    <TodoList todos={getTodos}/>
    <input type="text"/>
    <button>Add Todo</button>
    <button>Clear Complete</button>
    <div>0 left to do</div>
    </>
  )
}

export default App;
