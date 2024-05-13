import { Box, Chip, Container, Drawer, Flex, Group, rem } from '@mantine/core'
import React, { useContext, useState } from 'react'
import {AppContext} from '../context/AppContext';
import MapFilterButton from '../ui/MapFilterButton';
import { IconX } from '@tabler/icons-react';

export default function FiltersDrawer() {
  const { filterDrawerOpened, filterDrawerHandlers } = useContext(AppContext);

  console.log(`In drawer it is ${filterDrawerOpened}`);
  const categories = ['category1', 'category2', 'category3', 'categ', 'categorycategory', 'cate']
  const offers = ['offer1', 'offer2', 'offer3', 'offeroffer', 'offerofferoffer']

  const [categoriesValue, setCategoriesValue] = useState(categories);
  const [offersValue, setOffersValue] = useState(offers);

  
  return (
    <Box pos="relative">
      
    <MapFilterButton></MapFilterButton>
      <Drawer position="bottom" radius="md" size="50vh"  withCloseButton={false} opened={filterDrawerOpened} onClose={filterDrawerHandlers.close} transitionProps={{timingFunction:"ease", duration: 200 }} >
      <Drawer.Title mb="md">Filters</Drawer.Title>
        <Container px={0}>
          Categories
          <Chip.Group multiple value={categoriesValue} onChange={setCategoriesValue}>
          <Group gap="xs" px={0} justify="start" mt="sm">
            {categories.map(cat => 
              <Chip key={cat}
              // icon={<IconX style={{ width: rem(16), height: rem(16) }} />}
              value={cat}
              color="red"
              variant="filled"
              >
              {cat}
            </Chip>
              )}
            <Chip key='catAll'
              // icon={<IconX style={{ width: rem(16), height: rem(16) }} />}
              value='All'
                color="red"
                
              checked={categoriesValue.length == categories.length}
                variant="filled"
                onChange={() => setCategoriesValue(categoriesValue.length < categories.length || categoriesValue.length == 0 ? categories : [])}
              >
              All
            </Chip>
            </Group>
          </Chip.Group>
        </Container>
        <Container px={0} my="sm">
          Offers
          <Chip.Group multiple value={offersValue} onChange={setOffersValue}>
          <Group gap="xs" px={0} justify="start" mt="xs">
            {offers.map(offer => 
              <Chip key={offer}
                value={offer}
              >
              {offer}
            </Chip>
              )}
              <Chip key='offAll'
              value='All'
              checked={offersValue.length == offers.length}
                onChange={() => setOffersValue(offersValue.length < offers.length || offersValue.length == 0 ? offers : [])}
              >
              All
            </Chip>
              </Group>
          </Chip.Group>
      </Container>
      </Drawer>
    </Box>
  )
}
