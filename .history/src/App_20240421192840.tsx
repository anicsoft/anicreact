import { useState } from 'react'
import '@radix-ui/themes/styles.css';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Flex,Text, Theme } from '@radix-ui/themes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button>Let's go</Button>
       </Flex>
      </Theme>
    </>
  )
}

export default App
