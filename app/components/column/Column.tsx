import type { LinksFunction } from "@remix-run/node";
import clsx from "clsx";
import React from "react";
import { Box } from "../box";
import type { BoxProps } from "../box/Box";
import type { Gap } from "../types";
import { GapType } from "../types";
import styles from "./column.css";

export const links: LinksFunction = () => [
	{
		rel: "stylesheet",
		href: styles,
	},
];

type ColumnProps = BoxProps & {
	gap?: Gap;
};

export const Column = ({ as: Tag = "div", gap = "medium", children, className }: ColumnProps) => {
	return (
		<Box as={Tag} className={clsx("cw-column", className, GapType[gap])}>
			{children}
		</Box>
	);
};
