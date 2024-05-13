import { Drawer } from '@mantine/core'
import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext';

export default function FiltersDrawer() {
  const { opened, filterDrawerHandlers } = useContext(AppContext);
  return (
    <Drawer opened={opened} onClose={() => filterDrawerHandlers.close()} title="Authentication">
      {/* Drawer content */}
      LALALALALALALAALL
      </Drawer>
  )
}
