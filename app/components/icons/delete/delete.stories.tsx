import { Delete } from './Delete';

import type { DeleteProps } from './Delete';
import type { Meta, Story } from '@storybook/react';

//eslint-disable-next-line
export default {
  title: 'Components/Icons/Delete',
  component: Delete,
} as Meta<DeleteProps>;

export const Default: Story<DeleteProps> = (args) => {
  return <Delete {...args} />;
};
