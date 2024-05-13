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


export default function OfferCard(props: CardProps) {

  console.log(props);
  
  return (
    <Card shadow="md" withBorder radius="md">
      <Card>
        
      </Card>
      <Card.Section>
        <Button variant="outline" color="blue" size="sm" onClick={props.onClick}>
          See More
        </Button>
      </Card.Section>
    </Card>
  );
}

