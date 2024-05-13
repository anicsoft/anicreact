import { Box, Chip, Container, Drawer, Flex, Group, rem } from '@mantine/core'
import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext';
import MapFilterButton from '../ui/MapFilterButton';
import { IconX } from '@tabler/icons-react';

export default function FiltersDrawer() {
  const { filterDrawerOpened, filterDrawerHandlers } = useContext(AppContext);

  console.log(`In drawer it is ${filterDrawerOpened}`);

  const categories = ['category1', 'category2', 'category3', 'categ', 'categorycategory', 'cate']
  const offers = ['offer1', 'offer2', 'offer3', 'offeroffer', 'offerofferoffer']
  
  return (
    <Box pos="relative">
      
    <MapFilterButton></MapFilterButton>
      <Drawer position="bottom" radius="md" size="50vh"  withCloseButton={false} opened={filterDrawerOpened} onClose={filterDrawerHandlers.close} transitionProps={{timingFunction:"ease", duration: 200 }}  title="Filters">
        <Container>
          Categories
          <Chip.Group>
          <Group justify="start">
            {categories.map(cat => 
              <Chip
              icon={undefined}
              color="red"
              variant="filled"
              defaultChecked
            >
              {cat}
            </Chip>
              )}
              </Group>
          </Chip.Group>
      </Container>
      </Drawer>
    </Box>
  )
}
