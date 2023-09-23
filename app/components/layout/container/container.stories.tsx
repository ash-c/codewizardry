import { Container } from './Container';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

//eslint-disable-next-line
export default {
  title: 'Components/Layout/Container',
  component: Container,
} as ComponentMeta<typeof Container>;

export const Primary: ComponentStory<typeof Container> = () => (
  <Container style={{ border: '2px solid black' }}>content</Container>
);
