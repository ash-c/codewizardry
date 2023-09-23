import { TodoProvider } from './store';
import { TodoApp, TodoLinks } from './todo';

import type { LinksFunction } from '@remix-run/node';

export const links: LinksFunction = () => [...TodoLinks()];

//eslint-disable-next-line
export default function todo() {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
}
