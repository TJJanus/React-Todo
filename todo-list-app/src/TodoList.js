import React from 'react';
import Todo from './Todo'

const TodoList = props => {
    return (
      <div>
        {props.todos.map(todo => (
          <Todo
            toggleItem={props.toggleItem}
            key={todo.id}
            todo={todo}
            handleToggleComplete={props.handleToggleComplete}
          />
        ))}
      </div>
    );
  };

export default TodoList;