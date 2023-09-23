import { useState } from 'react';

import { Stack } from '../../index';

import { Checkbox } from './Checkbox';

import type { CheckboxProps } from './Checkbox';
import type { Meta, Story } from '@storybook/react';

//eslint-disable-next-line
export default {
  title: 'Components/Input/Checkbox',
  component: Checkbox,
} as Meta<CheckboxProps>;

export const Default: Story<CheckboxProps> = (args) => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);

  return (
    <Stack>
      <Checkbox
        {...args}
        checked={checked1}
        onChange={(e) => setChecked1(e.target.checked)}
      />
      <Checkbox
        {...args}
        checked={checked2}
        onChange={(e) => setChecked2(e.target.checked)}
      />
    </Stack>
  );
};

export const WithLabel: Story<CheckboxProps> = (args) => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);

  return (
    <Stack>
      <Checkbox
        {...args}
        checked={checked1}
        onChange={(e) => setChecked1(e.target.checked)}
        label="Test label"
      />
      <Checkbox
        {...args}
        checked={checked2}
        onChange={(e) => setChecked2(e.target.checked)}
        label="Test label"
      />
    </Stack>
  );
};

export const Disabled: Story<CheckboxProps> = (args) => {
  return (
    <Stack>
      <Checkbox {...args} disabled={true} label="Checkbox is disabled" />
      <Checkbox
        {...args}
        disabled={true}
        checked={true}
        label="Checkbox is disabled"
      />
    </Stack>
  );
};
