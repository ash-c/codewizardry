import styles from './icons.css';

import type { LinksFunction } from '@remix-run/node';

const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: styles,
  },
];

export const IconLinks = links;

export { Delete } from './delete/Delete';
