import { useContext } from 'react';

import { TodoContext } from './todo.store';

export const useTodos = () => {
  const todos = useContext(TodoContext);

  if (null == todos) {
    throw new Error('useTodos must be wrapped in a TodoProvider.');
  }

  return todos;
};
