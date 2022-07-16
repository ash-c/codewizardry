import type { ElementType } from "react";

export type BoxProps = {
	as?: ElementType;
	children?: React.ReactNode;
	className?: string;
};

export const Box = ({ as: Tag = "div", children, className }: BoxProps) => {
	return <Tag className={className}>{children}</Tag>;
};
