
import './App.css'
import '@mantine/core/styles.css';
import { Container, MantineProvider } from '@mantine/core';
import OfferCard from './components/OfferCard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppContextProvider } from './context/AppContext';
import { useMap } from 'react-leaflet/hooks'
import { MapContainer, TileLayer } from 'react-leaflet';


const queryclient = new QueryClient

function MyComponent() {
  const map = useMap()
  console.log('map center:', map.getCenter())
  return null
}

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
            <MapContainer center={[50.5, 30.5]} zoom={13}>
            <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
            <MyComponent />
          </MapContainer>
          </QueryClientProvider>
        </AppContextProvider>
      </MantineProvider>

    </>
  )
}

export default App
