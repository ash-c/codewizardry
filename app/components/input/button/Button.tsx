import type {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
  FunctionComponent,
} from 'react';

import styles from './button.css';

import type { SvgProps } from '@cw/icons/svg/Svg';
import type { Colour } from '@cw/types';
import type { LinksFunction } from '@remix-run/node';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: styles,
  },
];

export type ButtonProps = {
  children?: ReactNode;
  colour?: Colour;
  StartIcon?: FunctionComponent<SvgProps>;
  EndIcon?: FunctionComponent<SvgProps>;
} & Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'color'
>;

export const Button = ({
  children,
  colour = 'primary',
  StartIcon,
  EndIcon,
  ...rest
}: ButtonProps) => {
  if (StartIcon && EndIcon) {
    throw new Error(
      'Buttons can only have either a Start or End Icon, not both.'
    );
  }

  return (
    <button {...rest} className={colour}>
      {StartIcon && <StartIcon />}
      <span>{children}</span>
      {EndIcon && <EndIcon />}
    </button>
  );
};
