export const GapType = {
	none: "gap-none",
	small: "gap-small",
	medium: "gap-medium",
	large: "gap-large",
	xlarge: "gap-xlarge",
} as const;
export type Gap = keyof typeof GapType;
