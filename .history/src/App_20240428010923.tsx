import { useState, createContext  } from 'react'

import './App.css'
import '@mantine/core/styles.css';
import { Container, MantineProvider } from '@mantine/core';
import OfferCard from './components/OfferCard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppContextProvider } from './context/AppContext';

const ThemeContext = createContext("");
const queryclient = new QueryClient

function App() {
  // const [count, setCount] = useState(0)


  const demoProps = {
    bg: 'var(--mantine-color-blue-light)',
    h: 50,
    mt: 'md',
  };

  const cardProps = {
    logo: "",
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
        <AppContextProvider>
          <QueryClientProvider client={queryclient}>
            <Container size="lg" {...demoProps}>
              <OfferCard {...cardProps}></OfferCard>
            </Container>
          </QueryClientProvider>
        </AppContextProvider>
      </MantineProvider>

    </>
  )
}

export default App
