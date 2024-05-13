import { Box, Drawer } from '@mantine/core'
import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext';
import MapFilterButton from '../ui/MapFilterButton';

export default function FiltersDrawer() {
  const { filterDrawerOpened, filterDrawerHandlers } = useContext(AppContext);

  console.log(`In drawer it is ${filterDrawerOpened}`);
  
  return (
    <Box pos="relative">
      
    <MapFilterButton></MapFilterButton>
      <Drawer position="bottom" radius="md" size="50vh"  withCloseButton={false} opened={filterDrawerOpened} onClose={filterDrawerHandlers.close} style={{transition: 'bottom 0.3s ease-in-out'}} title="Authentication">
      {/* Drawer content */}
      LALALALALALALAALL
      </Drawer>
    </Box>
  )
}
