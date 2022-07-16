import type { LinkDescriptor } from "@remix-run/node";
import { Link } from "@remix-run/react";
import React from "react";
import { Box } from "../box";
import { Column, ColumnLinks } from "../column";
import { Container, ContainerLinks } from "../container";
import styles from "./core.css";

export function links(): LinkDescriptor[] {
	return [{ rel: "stylesheet", href: styles }, ...ColumnLinks(), ...ContainerLinks()];
}

type CoreProps = {
	children?: React.ReactNode;
};

export const Core = ({ children }: CoreProps) => {
	return (
		<>
			<nav>
				<Column gap="none" className="height-full align-center">
					<Box className="nav-logo">CW</Box>
					<Link to="/">Home</Link>
					<Link to="/projects">Projects</Link>
					<Link to="/concepts">Concepts</Link>
				</Column>
			</nav>
			<Container>{children}</Container>
		</>
	);
};
