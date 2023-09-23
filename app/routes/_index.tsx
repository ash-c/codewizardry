import { Link } from '@remix-run/react';

import { Box, Container, Stack } from '@cw/index';

//eslint-disable-next-line
export default function Index() {
  return (
    <Container>
      <main>
        <h1>Welcome to Code Wizardry</h1>
        <Stack gap="medium">
          <Box>
            <Box>some text about</Box>
          </Box>
          <Box>
            <h2>
              <Link to="/projects">Projects</Link>
            </h2>
          </Box>
        </Stack>
      </main>
    </Container>
  );
}
