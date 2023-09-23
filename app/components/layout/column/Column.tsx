import type { HTMLAttributes } from 'react';

import clsx from 'clsx';
import React from 'react';

import { GapType } from '../../types';
import { Box } from '../box';

import styles from './column.css';

import type { Gap } from '../../types';
import type { BoxProps } from '../box/Box';
import type { LinksFunction } from '@remix-run/node';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: styles,
  },
];

export type ColumnProps = BoxProps & {
  gap?: Gap;
} & HTMLAttributes<HTMLElement>;

export const Column = ({
  as: Tag = 'div',
  gap = 'medium',
  children,
  className,
}: ColumnProps) => {
  return (
    <Box as={Tag} className={clsx('cw-column', className, GapType[gap])}>
      {children}
    </Box>
  );
};
