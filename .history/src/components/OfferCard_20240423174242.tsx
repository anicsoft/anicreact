import React from 'react';
import {
  Card,
  // CardHeader,
  // CardContent,
  // CardFooter,
  Group,
  Text,
  Image,
  Stack,
  Avatar,
  Chip,
  Button,
} from '@mantine/core';
import { BellIcon } from '@tabler/icons-react'; // Assuming this is your Tabler icon

interface CardProps {
  logo: string; // URL for the logo/image
  title: string;
  address: string;
  workingHours: string;
  distance: number;
  categories: string[];
  onClick?: () => void;
}

const LocationCard: React.FC<CardProps> = ({
  logo,
  title,
  address,
  workingHours,
  distance,
  categories,
  onClick,
}) => (
  <Card shadow="md" withBorder radius="md">
    <Card>
      <Group>
        <Avatar src={logo} size="lg" radius="md" />
        <Stack >
          <Text>{title}</Text>
          <Text size="sm" color="gray.700">
            {address}
          </Text>
          <Text size="sm" color="gray.700">
            {workingHours}
          </Text>
        </Stack>
      </Group>
      <Group  align="center">
        {/* <Icon variant="light" color="blue"> */}
          <BellIcon />
        {/* </Icon> */}
        <Text size="sm" color="gray.700">
          {distance}m away
        </Text>
      </Group>
    </Card>
    <Card.Section>
      <Chip>
        {categories.map((category) => (
          <Chip key={category} variant="light" color="blue">
            {category}
          </Chip>
        ))}
      </Chip>
    </Card.Section>
    <Card.Section>
      <Button variant="outline" color="blue" size="sm" onClick={onClick}>
        See More
      </Button>
    </Card.Section>
  </Card>
);

export default LocationCard;
