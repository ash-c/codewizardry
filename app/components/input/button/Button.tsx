import {
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
  type ReactNode,
  type FunctionComponent,
  useRef,
} from 'react';

import styles from './button.css';

import type { SvgProps } from '@cw/icons/svg/Svg';
import type { Colour } from '@cw/types';
import type { LinksFunction } from '@remix-run/node';
import { AriaButtonProps, useButton } from 'react-aria';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: styles,
  },
];

export type InternalButtonProps = {
  colour?: Colour;
  StartIcon?: FunctionComponent<SvgProps>;
  EndIcon?: FunctionComponent<SvgProps>;
} & AriaButtonProps;

export const Button = ({
  children,
  colour = 'primary',
  StartIcon,
  EndIcon,
  ...rest
}: InternalButtonProps) => {
  if (StartIcon && EndIcon) {
    throw new Error(
      'Buttons can only have either a Start or End Icon, not both.'
    );
  }

  const ref = useRef(null);
  const { buttonProps } = useButton(rest, ref);

  return (
    <button {...buttonProps} ref={ref} className={colour}>
      {StartIcon && <StartIcon />}
      <span>{children}</span>
      {EndIcon && <EndIcon />}
    </button>
  );
};
