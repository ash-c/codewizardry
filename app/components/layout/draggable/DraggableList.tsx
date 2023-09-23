import { Box } from '../box';

export type DraggableListProps<Type = any> = {
  items: Type[];
  itemHeight: number;
  renderItem: (args: Type) => JSX.Element | string;
  gap?: number;
};

export function DraggableList<T>({
  renderItem,
  items,
  itemHeight,
  gap = 8,
}: DraggableListProps<T>) {
  return (
    <Box style={{ position: 'relative' }}>
      {items.map((val, index) => {
        return (
          <div
            key={JSON.stringify(val)}
            style={{
              position: 'absolute',
              width: '100%',
              height: `${itemHeight}px`,
              top: index * itemHeight + index * gap,
            }}
          >
            {renderItem(val)}
          </div>
        );
      })}
    </Box>
  );
}
