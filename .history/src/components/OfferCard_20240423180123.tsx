import React from 'react';
import {
  Card,
  // CardHeader,
  // CardContent,
  // CardFooter,
  Group,
  Text,
  // Image,
  Stack,
  Avatar,
  Chip,
  Button,
} from '@mantine/core';
import { IconWalk } from '@tabler/icons-react'; // Assuming this is your Tabler icon

interface CardProps {
  logo: string; // URL for the logo/image
  title: string;
  address: string;
  workingHours: string;
  distance: number;
  categories: string[];
  onClick?: () => void;
}


export default function OfferCard(props: unknown) {

  console.log(props);
  
  return (
    <Card shadow="md" withBorder radius="md">
      <Card>
        <Group>
          <Avatar src={props.data.logo} size="lg" radius="md" />
          <Stack >
            <Text>{props.data.title}</Text>
            <Text size="sm" color="gray.700">
              {props.address}
            </Text>
            <Text size="sm" color="gray.700">
              {props.data.workingHours}
            </Text>
          </Stack>
        </Group>
        <Group align="center">
          {/* <Icon variant="light" color="blue"> */}
          <IconWalk />
          {/* </Icon> */}
          <Text size="sm" color="gray.700">
            {props.data.distance}m away
          </Text>
        </Group>
      </Card>
      <Card.Section>
        {/* <Chip>
          {props.categories.map((category) => (
            <Chip key={category} variant="light" color="blue">
              {category}
            </Chip>
          ))}
        </Chip> */}
      </Card.Section>
      <Card.Section>
        <Button variant="outline" color="blue" size="sm" onClick={props.data.onClick}>
          See More
        </Button>
      </Card.Section>
    </Card>
  );
}

