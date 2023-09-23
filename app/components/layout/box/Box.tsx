import type { ElementType, HTMLAttributes, ReactNode } from 'react';

export type BoxProps = {
  as?: ElementType;
  children?: ReactNode;
} & HTMLAttributes<HTMLElement>;

export const Box = ({ as: Tag = 'div', children, ...rest }: BoxProps) => {
  return <Tag {...rest}>{children}</Tag>;
};
