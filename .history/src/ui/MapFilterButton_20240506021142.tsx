import { ActionIcon } from '@mantine/core'
import { IconAdjustments } from '@tabler/icons-react'
import React from 'react'

export default function MapFilterButton() {
  return (
    <ActionIcon variant="filled" size="xl" aria-label="Settings">
      <IconAdjustments style={{ width: '70%', height: '70%' }} stroke={1.5} />
    </ActionIcon>
  )
}
