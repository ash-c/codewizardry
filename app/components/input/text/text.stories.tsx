import { Stack } from '../../index';

import { Text } from './Text';

import type { TextProps } from './Text';
import type { Meta, Story } from '@storybook/react';

//eslint-disable-next-line
export default {
  title: 'Components/Input/Text',
  component: Text,
} as Meta<TextProps>;

export const Default: Story<TextProps> = (args) => {
  return (
    <Stack>
      <Text {...args} label="test label" />
      <Text {...args} disabled={true} label="Disabled" />
      <Text
        {...args}
        readOnly={true}
        label="Readonly"
        value="Some readonly text"
      />
    </Stack>
  );
};

export const HelperText: Story<TextProps> = (args) => {
  return (
    <Stack>
      <Text label="With helper text" helperText="A helpful message" {...args} />
      <Text label="With error" errorText="This is not correct" {...args} />
    </Stack>
  );
};

export const Required: Story<TextProps> = (args) => {
  return <Text label="Label" required={true} {...args} />;
};

export const Placeholder: Story<TextProps> = (args) => {
  return <Text label="Label" placeholder="placeholder text" {...args} />;
};
