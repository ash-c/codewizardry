import clsx from 'clsx';

import { GapType } from '../../types';
import { Box } from '../box/Box';

import styles from './stack.css';

import type { Gap } from '../../types';
import type { BoxProps } from '../box/Box';
import type { LinksFunction } from '@remix-run/node';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: styles,
  },
];

export type StackProps = BoxProps & {
  gap?: Gap;
};

export const Stack = ({
  as: Tag = 'div',
  children,
  gap = 'medium',
  className,
  ...rest
}: StackProps) => {
  return (
    <Box
      as={Tag}
      className={clsx('cw-stack', GapType[gap], className)}
      {...rest}
    >
      {children}
    </Box>
  );
};
