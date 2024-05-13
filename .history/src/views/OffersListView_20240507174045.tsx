import { Stack } from '@mantine/core'
import React from 'react'

import mock_cards from './../utils/data';
import OfferCard from '../components/OfferCard';

export default function OffersListView() {

  // const =  mock_cards
  return (
    <Stack>
      {mock_cards.map((card) => {
        // <div style={{height:"100vh", backgroundColor:"pink"}}>OffersListView</div>
        <OfferCard popUp={card}></OfferCard>
      })}
    </Stack>
  )
}
