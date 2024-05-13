import { AppShell, Menu } from '@mantine/core'
import React, { useContext, useEffect } from 'react'
import FiltersDrawer from '../components/FiltersDrawer'
import {AppContext} from '../context/AppContext';

export default function Home() {
  const { viewType } = useContext(AppContext);
  let view = <></>
  useEffect(() => {
    console.log('View type is ' + viewType);
    if (viewType === 'map') {
      view =  <div style={{paddingTop:"20rem", height:"100vh", backgroundColor:"pink"}}>MAP!</div>
    } else {
      view = <div style={{paddingTop:"20rem", height:"100vh", backgroundColor:"pink"}}>LIST!</div>
    }
    
  }, [viewType])
  return (
    <AppShell
      // header={{ height: 60 }}
    >
      <AppShell.Header
        // padding={{ base: 10, sm: 25, lg: 'xl' }}
      >
        <Menu></Menu>

      </AppShell.Header>

      <AppShell.Main>
        {/* {view} */}
        {viewType === 'map' &&
          // <BasicMap></BasicMap>
          <div style={{paddingTop:"20rem", height:"100vh", backgroundColor:"pink"}}>MAP!</div>
        }
        {viewType === 'list' &&
          <div style={{paddingTop:"20rem", height:"100vh", backgroundColor:"pink"}}>LIST!</div>

        // <OffersListView></OffersListView>
        }
      
        {/* <MapFilterButton></MapFilterButton> */}
        <FiltersDrawer></FiltersDrawer>
      </AppShell.Main>
    </AppShell>
  )
}
