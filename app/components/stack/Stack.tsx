import type { LinksFunction } from "@remix-run/node";
import clsx from "clsx";
import React from "react";
import type { BoxProps } from "../box/Box";
import { Box } from "../box/Box";
import type { Gap } from "../types";
import { GapType } from "../types";
import styles from "./stack.css";

export const links: LinksFunction = () => [
	{
		rel: "stylesheet",
		href: styles,
	},
];

type StackProps = BoxProps & {
	gap?: Gap;
};

export const Stack = ({ as: Tag = "div", children, gap = "medium" }: StackProps) => {
	return (
		<Box as={Tag} className={clsx("cw-stack", GapType[gap])}>
			{children}
		</Box>
	);
};
