import React from 'react';

import { Box } from './Box';

import type { BoxProps } from './Box';
import type { Story, Meta } from '@storybook/react';

//eslint-disable-next-line
export default {
  title: 'Components/Layout/Box',
  component: Box,
} as Meta<BoxProps>;

export const AsDiv: Story<BoxProps> = () => (
  <Box style={{ border: 'solid 2px black' }}>content</Box>
);

export const AsSpan: Story<BoxProps> = () => (
  <Box as="span" style={{ border: 'solid 2px black' }}>
    content
  </Box>
);
