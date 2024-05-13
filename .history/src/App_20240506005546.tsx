
import './App.css'
import "leaflet/dist/leaflet.css";
import '@mantine/core/styles.css';
import { AppShell, Avatar, Container, Flex, MantineProvider, SegmentedControl } from '@mantine/core';
import OfferCard from './components/OfferCard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppContextProvider } from './context/AppContext';
import BasicMap from './components/BasicMap';
import Menu from './components/Menu';


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
          <AppShell
              header={{ height: 60 }}
              navbar={{
                width: 300,
                breakpoint: 'sm',
                // collapsed: { mobile: !opened },
              }}
              padding="0"
            >
              <AppShell.Header
              padding={{ base: 10, sm: 15, lg: 'xl' }}>
                {/* <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="sm"
                  size="sm"
                /> */}

                <Flex
                  mih={50}
                  // bg="rgba(0, 0, 0, .3)"
                  gap="sm"
                  justify="space-between"
                  align="center"
                  direction="row"
                  wrap="nowrap"
                >
                  <Flex
                  gap="sm"
                  justify="flex-start"
                  align="center"
                  direction="row"
                  wrap="nowrap">
                    <Avatar src={null} alt="Vitaly Rtishchev" color="red">VR</Avatar>
                    <div>
                    <div>LALALALA</div>
                    <div>bebeb</div>

                    </div>
                  </Flex>

                 <SegmentedControl data={[ 'Map', 'List']} />
                </Flex>

              </AppShell.Header>

              <AppShell.Main>
                <BasicMap></BasicMap>
              </AppShell.Main>
            </AppShell>
          </QueryClientProvider>
        </AppContextProvider>
      </MantineProvider>

    </>
  )
}

export default App
