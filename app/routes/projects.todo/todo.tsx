import { Box, Button, Column, Divider, Stack, Text } from '@cw/index';
import { useCallback, useState } from 'react';

import { useTodos } from './store';
import styles from './todo.css';
import { TodoItem } from './todoItem';

import type { Todo } from './types';
import type { LinksFunction } from '@remix-run/node';

export const TodoLinks: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Oswald',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro',
    },
    { rel: 'stylesheet', href: styles },
  ];
};

export const TodoApp = () => {
  const [text, setText] = useState('');
  const [validation, setValidation] = useState<string | undefined>();

  const { addTodo, setDoneStatus, deleteTodo, todos } = useTodos();

  const handleAddTodo = useCallback(() => {
    if (text.length <= 0) {
      setValidation('Text is required.');
    } else {
      setValidation(undefined);
      addTodo(text);
      setText('');
    }
  }, [text, addTodo]);

  return (
    <Box className="todo-container">
      <Stack gap="xlarge" className="width-full">
        <Box>
          <h1>ToDO List</h1>
        </Box>
        <Column>
          <Text
            label="Todo item"
            type="text"
            name="text"
            errorText={validation}
            value={text}
            onChange={(event) => {
              setValidation(undefined);
              setText(event.target.value);
            }}
          />
          <Button type="submit" onPress={handleAddTodo}>
            Add
          </Button>
        </Column>
        <Divider colour="secondary" />
        <Stack gap="small">
          {todos.map((todo: Todo) => (
            <TodoItem
              key={JSON.stringify(todo)}
              todo={todo}
              setDoneStatus={setDoneStatus}
              deleteTodo={deleteTodo}
            />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};
