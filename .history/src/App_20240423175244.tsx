import { useState } from 'react'
import './App.css'
import '@mantine/core/styles.css';
import { Container, MantineProvider } from '@mantine/core';
import OfferCard from './components/OfferCard';

function App() {
  // const [count, setCount] = useState(0)

  const demoProps = {
    bg: 'var(--mantine-color-blue-light)',
    h: 50,
    mt: 'md',
  };

  const cardProps = {
    logo: "data:image/jpeg;base64,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",
    title: "Title",
    address: "Adress 5, Tallin, Estonia",
    workingHours:"10-22",
    distance:"500m",
    categories: ["category", "category", "category", "category"],
    onClick:() => {console.log("YAY");
  },
  }

  return (
    <>
      <MantineProvider>
      <Container size="lg" {...demoProps}>
          <OfferCard props={cardProps}></OfferCard>
      </Container>
      </MantineProvider>

    </>
  )
}

export default App
