
import './App.css'
import "leaflet/dist/leaflet.css";
import '@mantine/core/styles.css';
import { AppShell, Avatar, Container, MantineProvider } from '@mantine/core';
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
              <AppShell.Header>
                {/* <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="sm"
                  size="sm"
                /> */}
                 <Avatar src={null} alt="Vitaly Rtishchev" color="red">VR</Avatar>
                <div>Logo</div>
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
