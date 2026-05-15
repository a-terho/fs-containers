import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo);
  };

  const onClickComplete = (todo) => () => {
    completeTodo(todo);
  };

  return (
    <>
      {todos
        .map((todo, index) => {
          return (
            <Todo
              key={`__todo${index}`}
              todo={todo}
              onClickDelete={onClickDelete(todo)}
              onClickComplete={onClickComplete(todo)}
            />
          );
        })
        .reduce(
          (acc, cur) => [...acc, <hr key={`__hr${acc.length}`} />, cur],
          [],
        )}
    </>
  );
};

export default TodoList;
