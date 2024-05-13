import { ActionIcon } from '@mantine/core'
import { IconAdjustmentsHorizontal } from '@tabler/icons-react'
import React from 'react'

export default function MapFilterButton() {
  return (
    <ActionIcon variant="filled" size="xl" aria-label="Settings" pos="fixed" bottom="1.5rem" right="1.5rem" style={{zIndex:"2"}}>
      <IconAdjustmentsHorizontal style={{ width: '70%', height: '70%', transform: "rotate:180deg" }} stroke={1.5} />
    </ActionIcon>
  )
}
