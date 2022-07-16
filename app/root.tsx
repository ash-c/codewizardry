import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { Core, CoreLinks } from "./components/core";

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "Code Wizardry",
	viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [...CoreLinks()];

export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Core>
					<Outlet />
				</Core>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
