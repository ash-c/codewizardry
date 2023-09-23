import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import clsx from 'clsx';

import styles from './checkbox.css';

import type { LinksFunction } from '@remix-run/node';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: styles,
  },
];

export type CheckboxProps = {
  label?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Checkbox = ({ label, ...rest }: CheckboxProps) => {
  return (
    <label
      className={clsx([
        'checkbox',
        { disabled: rest.disabled },
        { gap: !!label },
      ])}
    >
      <input type="checkbox" {...rest} />
      {label}
    </label>
  );
};
