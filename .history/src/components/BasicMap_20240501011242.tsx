import { Button, Modal, Popover, TextInput, UnstyledButton } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import MarkerClusterGroup from "react-leaflet-cluster";
import { divIcon, point } from "leaflet";
import OfferCard from './OfferCard';


export default function BasicMap() {
  const [opened, { open, close }] = useDisclosure(false);
  const markers = [
    {
      geocode: [48.86, 2.3522],
      popUp: {
        businessName: "Nimeta baar",
        title: "Nihuemoe"
      }
    },
    {
      geocode: [48.92, 2.3522],
      popUp:{
        businessName: "Nimeta baar",
        title: "Huemoe"
      }
    },
    {
      geocode: [48.86, 2.3622],
      popUp:{
        businessName: "Nimeta baar",
        title: "With html",
        content: '<ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>'
      }
    }
  ]

  // const createClusterCustomIcon = (cluster: any) => {
  //   const icon = divIcon({
  //     html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
  //     className: "custom-marker-cluster",
  //     iconSize: point(33, 33, true)
  //   });
  //   return icon
  // };
  
  return (
    <MapContainer  center={[48.8566, 2.3522]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup
        chunkedLoading // Performance stuff
        // iconCreateFunction={createClusterCustomIcon}
      >
      {markers.map((marker) => (
          <Marker key={marker.popUp.title+marker.popUp.businessName} position={marker.geocode}>
            <Popup >
              <UnstyledButton onClick={open}>    
              <h2>{marker.popUp.title}</h2>
              <p>{marker.popUp.businessName}</p>
            </UnstyledButton>
            </Popup>
          <Modal opened={opened} onClose={close} title="Authentication">
            <OfferCard popUp={{...marker.popUp}}></OfferCard>
            </Modal>
          </Marker>
      )
        )}
      </MarkerClusterGroup>
    </MapContainer>
  )
}
