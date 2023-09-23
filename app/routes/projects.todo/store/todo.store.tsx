import type { ReactNode } from 'react';

import { useEffect } from 'react';
import { useCallback } from 'react';
import { createContext, useState } from 'react';

import type { Todo } from '@todo/types/index';

const STORAGEKEY = 'todoItems';

type TodoContextType = {
  addTodo: (text: string) => void;
  setDoneStatus: (id: number, status: boolean) => void;
  deleteTodo: (id: number) => void;
  todos: Todo[];
};

export const TodoContext = createContext<TodoContextType | null>(null);

type TodoProviderProps = {
  children?: ReactNode;
};

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const localTodos = localStorage.getItem(STORAGEKEY);

    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGEKEY, JSON.stringify(todos));
  }, [todos]);

  const onAddTodo = useCallback(
    (text: string) => {
      if (todos?.length > 0) {
        todos.push({ id: todos[todos.length - 1].id + 1, text, done: false });
      } else {
        todos.push({ id: 1, text, done: false });
      }
      setTodos([...todos]);
    },
    [todos]
  );

  const onDeleteTodo = useCallback(
    (id: number) => {
      const todoIndex = todos.findIndex((val) => val.id === id);

      if (-1 < todoIndex) {
        todos.splice(todoIndex, 1);
        setTodos([...todos]);
      }
    },
    [todos]
  );

  const onSetDoneStatus = useCallback(
    (id: number, status: boolean) => {
      const todo = todos.find((val) => val.id === id);

      if (todo) {
        todo.done = status;
      }

      setTodos([...todos]);
    },
    [todos]
  );

  return (
    <TodoContext.Provider
      value={{
        addTodo: onAddTodo,
        setDoneStatus: onSetDoneStatus,
        deleteTodo: onDeleteTodo,
        todos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
