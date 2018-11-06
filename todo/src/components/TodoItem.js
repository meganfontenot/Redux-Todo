import React from 'react';

const TodoItem = props => {
    return (
        <form>
            <input
                name='newItem'
                onChange={props.changeHandler}
                placeholder='What do you need to do?'
                type='text'
                value={props.newItem}
            />
            <button onClick={props.addTodo}>Add Here</button>
        </form>
    );
}

export default TodoItem;