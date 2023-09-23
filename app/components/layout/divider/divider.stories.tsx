import { Divider } from './Divider';

import type { DividerProps } from './Divider';
import type { Meta, Story } from '@storybook/react';

//eslint-disable-next-line
export default {
  title: 'Components/Layout/Divider',
  component: Divider,
} as Meta<DividerProps>;

export const Light: Story<DividerProps> = () => {
  return <Divider colour="light" />;
};

export const Medium: Story<DividerProps> = () => {
  return <Divider colour="medium" />;
};

export const Dark: Story<DividerProps> = () => {
  return <Divider colour="dark" />;
};

export const Primary: Story<DividerProps> = () => {
  return <Divider colour="primary" />;
};

export const Secondary: Story<DividerProps> = () => {
  return <Divider colour="secondary" />;
};
