import clsx from 'clsx';

import { Box, Checkbox, Column, Delete, IconButton } from '@cw/index';

import type { Todo } from './types/todo';

type TodoItemProps = {
  setDoneStatus: (id: number, status: boolean) => void;
  deleteTodo: (id: number) => void;
  todo: Todo;
};

export const TodoItem = ({
  setDoneStatus,
  deleteTodo,
  todo,
}: TodoItemProps) => {
  const { text, done, id } = todo;
  return (
    <Column className="todo-item align-center">
      <Box className="box">
        <span className={clsx('text', { done })}>{text}</span>
        <div className={clsx('todo', { done })} />
      </Box>
      <Box>
        <Checkbox
          name="todoItem-doneState"
          checked={done}
          onChange={(event) => setDoneStatus(id, event.target.checked)}
        />
      </Box>
      <IconButton Icon={Delete} onClick={() => deleteTodo(id)} />
    </Column>
  );
};
