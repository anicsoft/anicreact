
import './App.css'
import "leaflet/dist/leaflet.css";
import '@mantine/core/styles.css';
import { AppShell, Avatar, Container, Flex, MantineProvider, SegmentedControl } from '@mantine/core';
import OfferCard from './components/OfferCard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppContextProvider, { AppContext } from './context/AppContext';
import BasicMap from './components/BasicMap';
import Menu from './components/Menu';
import MapFilterButton from './ui/MapFilterButton';
import { useContext } from 'react';


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

  const { filterDrawerOpened } = useContext(AppContext);
  return (
    <>
      <MantineProvider>
        <AppContextProvider>
          <QueryClientProvider client={queryclient}>
          <AppShell
              // header={{ height: 60 }}
            >
              <AppShell.Header
                // padding={{ base: 10, sm: 25, lg: 'xl' }}
              >
                <Menu></Menu>
                <p>Drawer is opened</p>

              </AppShell.Header>

              <AppShell.Main>
                {/* <BasicMap></BasicMap> */}
                <MapFilterButton></MapFilterButton>

              </AppShell.Main>
            </AppShell>
          </QueryClientProvider>
        </AppContextProvider>
      </MantineProvider>

    </>
  )
}

export default App
