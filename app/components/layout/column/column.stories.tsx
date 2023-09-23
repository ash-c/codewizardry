import { Box } from '../box';

import { Column } from './Column';

import type { ColumnProps } from './Column';
import type { Meta, Story } from '@storybook/react';

//eslint-disable-next-line
export default {
  title: 'Components/Layout/Column',
  component: Column,
} as Meta<ColumnProps>;

export const Default: Story<ColumnProps> = () => <Column>content</Column>;

export const MultipleNoGap: Story<ColumnProps> = () => (
  <Column gap="none">
    <Box>box 1</Box>
    <Box>box 2</Box>
    <Box>box 3</Box>
  </Column>
);

export const MultipleXSmallGap: Story<ColumnProps> = () => (
  <Column gap="xsmall">
    <Box>box 1</Box>
    <Box>box 2</Box>
    <Box>box 3</Box>
  </Column>
);

export const MultipleSmallGap: Story<ColumnProps> = () => (
  <Column gap="small">
    <Box>box 1</Box>
    <Box>box 2</Box>
    <Box>box 3</Box>
  </Column>
);

export const MultipleDefault: Story<ColumnProps> = () => (
  <Column>
    <Box>box 1</Box>
    <Box>box 2</Box>
    <Box>box 3</Box>
  </Column>
);

export const MultipleLargeGap: Story<ColumnProps> = () => (
  <Column gap="large">
    <Box>box 1</Box>
    <Box>box 2</Box>
    <Box>box 3</Box>
  </Column>
);

export const MultipleXLargeGap: Story<ColumnProps> = () => (
  <Column gap="xlarge">
    <Box>box 1</Box>
    <Box>box 2</Box>
    <Box>box 3</Box>
  </Column>
);
