import React from 'react';
import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem';

import { useSelector } from 'react-redux'
import { selectTodoList } from './features/todoSlice'


function App() {
  const todoList = useSelector(selectTodoList)
  return (
    <div className="App">
      <h1>Daily Chores/Tasks List</h1>
      <h2>Make your list of tasks and cross them out when completed</h2>
      <div className="app_container">
        <div className="app_todoContainer">
            {
              todoList.map(item => (
                <TodoItem 
                name={item.item}
                done={item.done}
                id={item.id}
                />
              ))
            }
        </div>
        
        <Input />
        {/* <TodoItem /> */}
            {/* there's a problem rendering! Revisit! */}
      </div>
        
        <h4>Created by Isaac Busee</h4>
        
    </div>
  );
}

export default App;
