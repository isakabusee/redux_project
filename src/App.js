import React from 'react';
import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem'

const todoList = [{
  item: 'todo',
  done: false,
  id: 63454674674
}, {
  item: 'todo2',
  done: true,
  id: 777777777
}]

function App() {
  return (
    <div className="App">
      <div className="app_container">
        <div className="app_todoContainer">
            {
              todoList.map(item => {
                <TodoItem 
                  name={item.item}
                  done={item.done}
                  id ={item.id}
                />
})
            }
        </div>
        
        <Input />

      </div>
        <h1>Hello world!</h1>
        {/* todo list */}
        {/*  done */}
    </div>
  );
}

export default App;
