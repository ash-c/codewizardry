import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import clsx from 'clsx';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import styles from './text.css';

import type { LinksFunction } from '@remix-run/node';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: styles,
  },
];

export type TextProps = {
  label?: string;
  helperText?: string;
  errorText?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Text = ({
  value = '',
  helperText,
  errorText,
  label,
  placeholder,
  readOnly,
  disabled,
  required,
  onFocus = () => null,
  onBlur = () => null,
  onChange = () => null,
  ...rest
}: TextProps) => {
  const [hasPlaceholder, setHasPlaceholder] = useState(!!placeholder);
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState<string>(value as string);

  useEffect(() => {
    if (text?.length > 0) {
      setHasPlaceholder(true);
    } else if (!placeholder) {
      setHasPlaceholder(false);
    }
  }, [text, placeholder]);

  useEffect(() => {
    if (value !== text) {
      setText(value as string);
      if ((value as string)?.length <= 0) {
        setIsFocused(false);
      }
    }
  }, [value, text]);

  const handleFocusChange = useCallback((focus: boolean) => {
    setIsFocused(focus);
  }, []);

  const labelCss = useCallback(
    () => ({
      placeholder: hasPlaceholder,
      focused: isFocused,
      readonly: readOnly,
      disabled,
      'error-border': !!errorText,
    }),
    [hasPlaceholder, isFocused, readOnly, disabled, errorText]
  );

  return (
    <div
      className={clsx('input-container', {
        'margin-b-medium': helperText || errorText,
        'error-text': !!errorText,
      })}
    >
      <input
        {...rest}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        value={text}
        className="input"
        onFocus={(e) => {
          handleFocusChange(true);
          onFocus(e);
        }}
        onBlur={(e) => {
          handleFocusChange(false);
          onBlur(e);
        }}
        onChange={(e) => {
          setText(e.target.value);
          onChange(e);
        }}
      />
      <div className={clsx('helper-text')}>{errorText || helperText}</div>
      <div className="input-outline">
        <div className={clsx(['left', labelCss()])} />
        <div className={clsx(['label', labelCss()])}>
          <label>
            {label}
            {required && '*'}
          </label>
        </div>
        <div className={clsx(['right', labelCss()])} />
      </div>
    </div>
  );
};
