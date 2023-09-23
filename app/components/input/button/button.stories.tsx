import { Delete } from '../../icons';
import { Stack } from '../../layout';

import { Button } from './Button';

import type { ButtonProps } from './Button';
import type { Meta, Story } from '@storybook/react';

//eslint-disable-next-line
export default {
  title: 'Components/Input/Button',
  component: Button,
} as Meta<ButtonProps>;

export const Default: Story<ButtonProps> = (args) => {
  return <Button {...args}>Default</Button>;
};

export const Secondary: Story<ButtonProps> = (args) => {
  return (
    <Button {...args} colour="secondary">
      Secondary
    </Button>
  );
};

export const Error: Story<ButtonProps> = (args) => {
  return (
    <Button {...args} colour="error">
      Secondary
    </Button>
  );
};

export const WithIcon: Story<ButtonProps> = (args) => {
  return (
    <Stack>
      <div>
        <Button {...args} StartIcon={Delete}>
          With Start Icon
        </Button>
      </div>
      <div>
        <Button {...args} EndIcon={Delete}>
          With End Icon
        </Button>
      </div>
    </Stack>
  );
};
