import React from 'react'
import { AppShell, Avatar, Burger, Flex, SegmentedControl } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export default function Menu() {


  const [opened, { toggle }] = useDisclosure();

  return (
    <Flex
      mih={50}
      // bg="rgba(0, 0, 0, .3)"
      gap="sm"
      justify="space-between"
      align="center"
      direction="row"
      wrap="nowrap"
    >
      <Flex
      gap="sm"
      justify="flex-start"
      align="center"
      direction="row"
      wrap="nowrap">
        <Avatar src={null} alt="Vitaly Rtishchev" color="red">VR</Avatar>
        <Flex
        // gap="xs"
        // justify="flex-start"
        align="start"
        direction="column">
        <div>LALALALA</div>
        <div>bebeb</div>

        </Flex>
      </Flex>

      <SegmentedControl data={[ 'Map', 'List']} />
    </Flex>
  )
}
