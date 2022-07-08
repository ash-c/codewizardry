import { Link } from "@remix-run/react";
import React from "react";
import styles from "./core.css";

export function links() {
	return [{ rel: "stylesheet", href: styles }];
}

type CoreProps = {
	children?: React.ReactNode;
};

export const Core = ({ children }: CoreProps) => {
	return (
		<>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/projects">Projects</Link>
				<Link to="/concepts">Concepts</Link>
			</nav>
			{children}
		</>
	);
};
