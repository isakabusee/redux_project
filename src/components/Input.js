import React, { useState } from 'react';
import './Input.css';

import { useDispatch } from 'react-redux';
import { saveTodo } from '../features/todoSlice';

const Input =() => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const addTodo = () =>{
        console.log(`Adding ${input}`)
        setInput("")

        dispatch(saveTodo({
           item: input,
           done: false,
           id: Date.now()
        }))
    }
    return (
        <div className="input">
            <input type="text" value={input} onChange={e=>setInput(e.target.value)} placeholder="Type your tasks here.."/>
            <button onClick={addTodo}>Add!</button>
        </div>
    )
}

export default Input
