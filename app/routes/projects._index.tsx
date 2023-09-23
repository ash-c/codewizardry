import { Link } from '@remix-run/react';

import { Column, Container } from '@cw/index';

//eslint-disable-next-line
export default function Projects() {
  return (
    <Container>
      <main>
        <h1>Projects</h1>
        <h2>Work</h2>
        <h2>Learning</h2>
        <Column>
          <Link to="todo">ToDo</Link>
          {/* <Link to="journal">Journal</Link>
          <Link to="recipe-book">Recipe Book</Link> */}
        </Column>
      </main>
    </Container>
  );
}
