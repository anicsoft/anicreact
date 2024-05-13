import { useState } from 'react'
import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <MantineProvider>
      HI there
      </MantineProvider>;

    </>
  )
}

export default App
