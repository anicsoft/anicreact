import {
  Card,
  Button,
  TypographyStylesProvider,
  Text,
  Group
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


export default function OfferCard({popUp}: CardProps) {

  console.log(popUp);
  
  return (
    <Card shadow="md" withBorder radius="md">
      <Card.Section>First section</Card.Section>
      <Group justify="space-between" mt="md" mb="xs">
      <Text size="sm" c="dimmed">
      <TypographyStylesProvider>
        <div
          dangerouslySetInnerHTML={{ __html: popUp.popUp?.content ?? "LALALA" }}
          />
      </TypographyStylesProvider>
      </Text>
      </Group>
      <Card.Section>
        <Button variant="outline" color="blue" size="sm" onClick={popUp.onClick}>
          See More
        </Button>
      </Card.Section>
    </Card>
  );
}

