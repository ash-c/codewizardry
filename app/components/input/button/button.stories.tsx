import { Delete } from '../../icons';
import { Stack } from '../../layout';

import { Button } from './Button';

import type { InternalButtonProps } from './Button';
import type { Meta, Story } from '@storybook/react';

//eslint-disable-next-line
export default {
  title: 'Components/Input/Button',
  component: Button,
} as Meta<InternalButtonProps>;

export const Default: Story<InternalButtonProps> = (args) => {
  return <Button {...args}>Default</Button>;
};

export const Secondary: Story<InternalButtonProps> = (args) => {
  return (
    <Button {...args} colour="secondary">
      Secondary
    </Button>
  );
};

export const Error: Story<InternalButtonProps> = (args) => {
  return (
    <Button {...args} colour="error">
      Secondary
    </Button>
  );
};

export const WithIcon: Story<InternalButtonProps> = (args) => {
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
