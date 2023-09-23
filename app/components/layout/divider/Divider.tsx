import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import clsx from 'clsx';

import styles from './divider.css';

import type { Colour } from '@cw/types';
import type { LinksFunction } from '@remix-run/node';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: styles,
  },
];

export type DividerProps = {
  colour?: 'light' | 'medium' | 'dark' | Colour;
} & Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement>,
  'color'
>;

export const Divider = ({
  colour = 'medium',
  className,
  ...rest
}: DividerProps) => {
  return <hr {...rest} className={clsx(colour, className)} />;
};
