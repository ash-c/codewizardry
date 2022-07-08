import type { ElementType } from "react";

type BoxProps = {
	as?: ElementType;
	children?: React.ReactNode;
};

export const Box = ({ as: Tag = "div", children }: BoxProps) => {
	return <Tag>{children}</Tag>;
};
