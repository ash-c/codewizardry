import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import { Stack, Core, CoreLinks, Column, Box } from '@cw/index';

import type { LinksFunction, V2_MetaFunction } from '@remix-run/node';

export const meta: V2_MetaFunction = () => [{ title: 'Code Wizardry' }];

export const links: LinksFunction = () => [...CoreLinks()];

type ErrorBoundaryProps = {
  error: Error;
};

export function ErrorBoundary({ error }: ErrorBoundaryProps) {
  return (
    <Box>
      <h1>Error</h1>
      <Stack>
        <h2>Message</h2>
        <Box>{error.message}</Box>
        <h3>Stack Trace</h3>
        <Box>{error.stack}</Box>
      </Stack>
    </Box>
  );
}

//eslint-disable-next-line
export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf=8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Core>
          <nav id="navbar">
            <Column gap="none" className="height-full align-center">
              <Box className="nav-logo">CW</Box>
              <NavLink to="/" prefetch="intent">
                Home
              </NavLink>
              <NavLink to="/projects" prefetch="intent">
                Projects
              </NavLink>
            </Column>
          </nav>
          <Outlet />
        </Core>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
