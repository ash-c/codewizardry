import type { ReactNode } from 'react';

import {
  ColumnLinks,
  ContainerLinks,
  StackLinks,
  ButtonLinks,
  DividerLinks,
  CheckboxLinks,
  TextLinks,
  IconLinks,
  IconButtonLinks,
} from '@cw/index';

import styles from './core.css';

import type { LinkDescriptor } from '@remix-run/node';

export function links(): LinkDescriptor[] {
  return [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;800&display=swap',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap',
    },
    { rel: 'stylesheet', href: styles },
    ...StackLinks(),
    ...ColumnLinks(),
    ...ContainerLinks(),
    ...DividerLinks(),
    ...ButtonLinks(),
    ...IconButtonLinks(),
    ...CheckboxLinks(),
    ...TextLinks(),
    ...IconLinks(),
  ];
}

type CoreProps = {
  children?: ReactNode;
};

export const Core = ({ children }: CoreProps) => {
  return <>{children}</>;
};
