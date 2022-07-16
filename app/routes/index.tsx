import type { LinksFunction } from "@remix-run/node";
import { Box } from "~/components/box";
import { Stack, StackLinks } from "~/components/stack";

export const links: LinksFunction = () => [...StackLinks()];

export default function Index() {
	return (
		<main>
			<h1>Welcome to Code Wizardry</h1>
			<Stack gap="medium">
				<Box>
					<h2>About</h2>
				</Box>
				<Box>
					<h2>Concepts</h2>
				</Box>
				<Box>
					<h2>Projects</h2>
				</Box>
			</Stack>
		</main>
	);
}
