import { Box } from '../box';

import { Stack } from './Stack';

import type { StackProps } from './Stack';
import type { Story } from '@storybook/react';
import type { Meta } from '@storybook/react';

//eslint-disable-next-line
export default {
  title: 'Components/Layout/Stack',
  component: Stack,
} as Meta<StackProps>;

export const Default: Story<StackProps> = () => (
  <Stack>
    <Box>box 1</Box>
  </Stack>
);

export const MultipleNoGap: Story<StackProps> = () => (
  <Stack gap="none">
    <Box>box 1</Box>
    <Box>box 2</Box>
    <Box>box 3</Box>
  </Stack>
);

export const MultipleXSmallGap: Story<StackProps> = () => (
  <Stack gap="xsmall">
    <Box>box 1</Box>
    <Box>box 2</Box>
    <Box>box 3</Box>
  </Stack>
);

export const MultipleSmallGap: Story<StackProps> = () => (
  <Stack gap="small">
    <Box>box 1</Box>
    <Box>box 2</Box>
    <Box>box 3</Box>
  </Stack>
);

export const MultipleDefault: Story<StackProps> = () => (
  <Stack>
    <Box>box 1</Box>
    <Box>box 2</Box>
    <Box>box 3</Box>
  </Stack>
);

export const MultipleLargeGap: Story<StackProps> = () => (
  <Stack gap="large">
    <Box>box 1</Box>
    <Box>box 2</Box>
    <Box>box 3</Box>
  </Stack>
);

export const MultipleXLargeGap: Story<StackProps> = () => (
  <Stack gap="xlarge">
    <Box>box 1</Box>
    <Box>box 2</Box>
    <Box>box 3</Box>
  </Stack>
);
