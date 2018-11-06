//import actions
import { ADD_TO_LIST } from '../actions';


const initialState = {
    todolist: [
        {
            item: 'Read for a hour',
            completed: false
        },
        {
            item: 'Work on classwork',
            completed: false
        },
        {
            item: 'Laundry',
            completed: false
        },
        {
            item: 'Clean Room',
            completed: false
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_LIST:
            return {
                ...state,
                todolist: [
                    ...state.todolist,
                    { item: action.payload, completed: false }
                ]
            }
        default:
            return state;
    }
}