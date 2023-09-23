import type { HTMLAttributes, ReactNode } from 'react';

import React from 'react';

import { Box } from '../box';

import styles from './container.css';

import type { LinksFunction } from '@remix-run/node';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: styles,
  },
];

type ContainerProps = {
  children?: ReactNode;
} & HTMLAttributes<HTMLElement>;

export const Container = ({ children, ...rest }: ContainerProps) => {
  return (
    <Box {...rest} className="cw-container">
      {children}
    </Box>
  );
};
