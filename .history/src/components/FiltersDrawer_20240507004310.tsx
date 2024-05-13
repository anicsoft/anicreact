import { Drawer } from '@mantine/core'
import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext';

export default function FiltersDrawer() {
  const { filterDrawerOpened, filterDrawerHandlers } = useContext(AppContext);
  return (
    <Drawer opened={filterDrawerOpened} onClose={() => filterDrawerHandlers.onClose()} title="Authentication">
        {/* Drawer content */}
      </Drawer>
  )
}
