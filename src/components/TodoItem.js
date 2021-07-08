import React from 'react';
import './TodoItem.css'

import { Checkbox } from '@material-ui/core';

const handleCheck=()=>{

}

const TodoItem = ({ name, done, id}) => {
    return (
        <div className="todoItem">
            <Checkbox
                checked={done}
                color="primary"
                onChange={handleCheck}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
            <p className={done && 'todoItem--done'}>{name}</p>
            <div className="trial">
                <h1>{name}</h1>
            </div>
            
        </div>
    )
}

export default TodoItem
