import React from 'react';
import {
  Card,
  Button,
  TypographyStylesProvider,
} from '@mantine/core';

interface CardProps {
  logo?: string; // URL for the logo/image
  title?: string;
  content?: string;
  address?: string;
  businessName?: string;
  workingHours?: string;
  distance?: number;
  categories?: string[];
  onClick?: () => void;
}


export default function OfferCard(props: CardProps) {

  console.log(props);
  
  return (
    <Card shadow="md" withBorder radius="md">
      <Card.Section>
      <TypographyStylesProvider>
      <div
        dangerouslySetInnerHTML={{ __html: props.content ?? "" }}
      />
    </TypographyStylesProvider>
      </Card.Section>
      <Card.Section>
        <Button variant="outline" color="blue" size="sm" onClick={props.onClick}>
          See More
        </Button>
      </Card.Section>
    </Card>
  );
}

