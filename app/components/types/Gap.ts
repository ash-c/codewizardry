export type Gap = 'none' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export const GapType: Record<Gap, string> = {
  none: 'gap-none',
  xsmall: 'gap-xsmall',
  small: 'gap-small',
  medium: 'gap-medium',
  large: 'gap-large',
  xlarge: 'gap-xlarge',
} as const;
