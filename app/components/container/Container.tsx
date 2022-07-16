import type { LinksFunction } from "@remix-run/node";
import React from "react";
import styles from "./container.css";

export const links: LinksFunction = () => [
	{
		rel: "stylesheet",
		href: styles,
	},
];

type ContainerProps = {
	children?: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
	return <div className="cw-container">{children}</div>;
};
