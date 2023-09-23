import { Delete } from '../../icons';

import { IconButton } from './IconButton';

import type { IconButtonProps } from './IconButton';
import type { Meta, Story } from '@storybook/react';

//eslint-disable-next-line
export default {
  title: 'Components/Input/IconButton',
  component: IconButton,
} as Meta<IconButtonProps>;

export const Default: Story<IconButtonProps> = (args) => {
  return <IconButton {...args} Icon={Delete} />;
};
