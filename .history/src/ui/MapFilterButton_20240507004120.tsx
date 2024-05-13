import { ActionIcon } from '@mantine/core'
import { IconAdjustmentsHorizontal } from '@tabler/icons-react'
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { useDisclosure } from '@mantine/hooks';

export default function MapFilterButton() {

  const { filterDrawerOpened, filterDrawerHandlers } = useContext(AppContext);
  // const [opened, { open, close }] = useDisclosure(false);

  return (
    <ActionIcon variant="filled" size="xl" aria-label="Settings" pos="fixed" bottom="1.5rem" right="1.5rem" style={{zIndex:"2"}} onClick={() => filterDrawerHandlers.onOpen()}>
      <IconAdjustmentsHorizontal style={{ width: '70%', height: '70%'}} stroke={1.5} />
    </ActionIcon>
  )
}
