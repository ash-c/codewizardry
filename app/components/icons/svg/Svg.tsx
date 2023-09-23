import type { ReactNode, SVGProps } from 'react';

import clsx from 'clsx';

import type { Colour } from '@cw/types';

export type SvgProps = Omit<SVGProps<SVGSVGElement>, 'color'> & {
  colour?: Colour;
  children?: ReactNode;
};

export const Svg = ({ children, colour = 'default', ...rest }: SvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden={true}
      focusable={false}
      className={clsx('icon', {
        [colour as string]: colour !== 'default',
      })}
    >
      {children}
    </svg>
  );
};
