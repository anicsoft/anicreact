
import './App.css'
import "leaflet/dist/leaflet.css";
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppContextProvider from './context/AppContext';
import Home from './views/Home';


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
          <Home></Home>
          </QueryClientProvider>
        </AppContextProvider>
      </MantineProvider>

    </>
  )
}

export default App
