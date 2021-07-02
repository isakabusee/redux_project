import { createSlice } from '@reduxjs/toolkit'

// const [todoList, setTodoList] = useState([])
// setTodoList()
const initialState = {
    // we are defining all the global variables in here this way. outside the todoSlice function. We could have defined them inside it as well.
    todoList: []
    // todoList is actually the "state"

}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            state.todoList.push(action.payload)
        }
    }
});

export const {
    saveTodo
} = todoSlice.actions
export default todoSlice.reducer