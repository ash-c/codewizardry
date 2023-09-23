import type { ReactNode } from 'react';

import { Box } from '../box';

export type DraggableItemProps = {
  children?: ReactNode;
};

export const DraggableItem = ({ children }: DraggableItemProps) => {
  return <Box draggable={true}>{children}</Box>;
};
