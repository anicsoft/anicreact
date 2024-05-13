import { Button, Modal, Popover, TextInput, UnstyledButton } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export default function BasicMap() {
  const [opened, { open, close }] = useDisclosure(false);
  const markers = [
    {
      geocode: [48.86, 2.3522],
      popUp:"LALALAL"
    },
    {
      geocode: [48.92, 2.3522],
      popUp:"<p>LALALAL<br/>HUIHUHH<p>"
    },
    {
      geocode: [48.86, 2.3622],
      popUp:"KAKAKA"
    }
  ]
  
  return (
    <MapContainer  center={[48.8566, 2.3522]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
          <Marker position={marker.geocode}>
            <Popup >
              <UnstyledButton onClick={open}>
                
                <h2>Hello!</h2>
                {marker.popUp}</UnstyledButton>
            </Popup>
          </Marker>
          // <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
          //   <Popover.Target>
          //     {/* <Button>Toggle popover</Button> */}
          //   </Popover.Target>
          //   <Popover.Dropdown>
          //     <TextInput label="Name" placeholder="Name" size="xs" />
          //     <TextInput label="Email" placeholder="john@doe.com" size="xs" mt="xs" />
          //   </Popover.Dropdown>
          // </Popover>
      )
      )}
      {/* <MyComponent /> */}
      <Modal opened={opened} onClose={close} title="Authentication">
        {/* Modal content */}
      </Modal>
    </MapContainer>
  )
}
