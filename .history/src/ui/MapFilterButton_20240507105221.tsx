import { ActionIcon } from '@mantine/core'
import { IconAdjustmentsHorizontal } from '@tabler/icons-react'
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

export default function MapFilterButton() {

  const { filterDrawerOpened, filterDrawerHandlers } = useContext(AppContext);

  return (
    <ActionIcon variant="filled" size="xl" aria-label="Settings" pos="fixed" bottom={filterDrawerOpened ? 'calc(20px + 80%)' : '1.5rem'} right="1.5rem" style={{zIndex:"2"}} onClick={filterDrawerHandlers.toggle}>
      <IconAdjustmentsHorizontal style={{ width: '70%', height: '70%'}} stroke={1.5} />
    </ActionIcon>
  )
}
