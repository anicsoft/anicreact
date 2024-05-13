import { Box, Chip, Container, Drawer, Flex, Group, rem } from '@mantine/core'
import React, { useContext, useState } from 'react'
import {AppContext} from '../context/AppContext';
import MapFilterButton from '../ui/MapFilterButton';
import { IconX } from '@tabler/icons-react';

export default function FiltersDrawer() {
  const { filterDrawerOpened, filterDrawerHandlers } = useContext(AppContext);

  console.log(`In drawer it is ${filterDrawerOpened}`);

  const [value, setValue] = useState(['react']);

  const categories = ['category1', 'category2', 'category3', 'categ', 'categorycategory', 'cate']
  const offers = ['offer1', 'offer2', 'offer3', 'offeroffer', 'offerofferoffer']
  
  return (
    <Box pos="relative">
      
    <MapFilterButton></MapFilterButton>
      <Drawer position="bottom" radius="md" size="50vh"  withCloseButton={false} opened={filterDrawerOpened} onClose={filterDrawerHandlers.close} transitionProps={{timingFunction:"ease", duration: 200 }} >
      <Drawer.Title>Drawer title</Drawer.Title>
        <Container px={0}>
          Categories
          <Chip.Group multiple value={value} onChange={setValue}>
          <Group gap="xs" px={0} justify="start" mt="sm">
            {categories.map(cat => 
              <Chip key={cat}
              // icon={null}
              color="red"
              variant="filled"
              defaultChecked
              // className={checked ? 'hide-checkmark' : ''}
            >
              {cat}
            </Chip>
              )}
              </Group>
          </Chip.Group>
        </Container>
        <Container px={0} my="sm">
          Offers
          <Chip.Group multiple value={value} onChange={setValue}>
          <Group gap="xs" px={0} justify="start" mt="xs">
            {offers.map(offer => 
              <Chip key={offer}
              // icon={null}
              color="red"
              variant="filled"
              defaultChecked
              // className={checked ? 'hide-checkmark' : ''}
            >
              {offer}
            </Chip>
              )}
              </Group>
          </Chip.Group>
      </Container>
      </Drawer>
    </Box>
  )
}
