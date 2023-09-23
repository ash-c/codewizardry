import type {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FunctionComponent,
} from 'react';

import clsx from 'clsx';

import styles from './iconbutton.css';

import type { SvgProps } from '@cw/icons/svg/Svg';
import type { Colour } from '@cw/types';
import type { LinksFunction } from '@remix-run/node';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: styles,
  },
];

export type IconButtonProps = {
  Icon: FunctionComponent<SvgProps>;
  colour?: Colour;
} & Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'color'
>;

export const IconButton = ({
  Icon,
  colour = 'default',
  className,
  ...rest
}: IconButtonProps) => {
  return (
    <button {...rest} className={clsx('icon-button', className)}>
      <Icon colour={colour} />
    </button>
  );
};
