import {
  useRef,
  type DetailedHTMLProps,
  type InputHTMLAttributes,
} from 'react';

import clsx from 'clsx';

import styles from './checkbox.css';

import type { LinksFunction } from '@remix-run/node';
import { AriaCheckboxProps, useCheckbox } from 'react-aria';
import { useToggleState } from 'react-stately';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: styles,
  },
];

export type CheckboxProps = {
  label?: string;
} & AriaCheckboxProps;

export const Checkbox = ({ label, ...rest }: CheckboxProps) => {
  const ref = useRef(null);
  const state = useToggleState(rest);
  const { inputProps, isDisabled } = useCheckbox(
    { ...rest, 'aria-label': label || '' },
    state,
    ref
  );

  return (
    <label
      className={clsx(['checkbox', { disabled: isDisabled }, { gap: !!label }])}
    >
      <input {...inputProps} ref={ref} />
      {label}
    </label>
  );
};
