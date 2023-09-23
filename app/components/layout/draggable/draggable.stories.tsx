import { DraggableList } from './DraggableList';

import type { DraggableListProps } from './DraggableList';
import type { Meta, Story } from '@storybook/react';

//eslint-disable-next-line
export default {
  title: 'Components/Layout/DraggableList',
  component: DraggableList,
} as Meta<DraggableListProps>;

export const Default: Story<DraggableListProps> = (args) => {
  return <DraggableList {...args} />;
};

Default.args = {
  items: [{ text: 'item 1' }, { text: 'item 2' }, { text: 'item 3' }],
  itemHeight: 20,
  renderItem: (item) => item.text,
  gap: 0,
};
