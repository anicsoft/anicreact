import { useState } from 'react'
import './App.css'
import '@mantine/core/styles.css';
import { Container, MantineProvider } from '@mantine/core';

function App() {
  // const [count, setCount] = useState(0)

  const demoProps = {
    bg: 'var(--mantine-color-blue-light)',
    h: 50,
    mt: 'md',
  };

  return (
    <>
      <MantineProvider>
      <Container size="xs" {...demoProps}>
        xs Container
      </Container>
      </MantineProvider>

    </>
  )
}

export default App
