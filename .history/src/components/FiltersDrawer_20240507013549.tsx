import { Drawer } from '@mantine/core'
import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext';

export default function FiltersDrawer() {
  const { filterDrawerOpened, filterDrawerHandlers } = useContext(AppContext);

  console.log(`In drawer it is ${filterDrawerOpened}`);
  
  return (
    <Drawer position="bottom" radius="md" opened={filterDrawerOpened} onClose={filterDrawerHandlers.close} title="Authentication">
      {/* Drawer content */}
      LALALALALALALAALL
      </Drawer>
  )
}
