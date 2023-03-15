import React from 'react';
import './card.css';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Stack, Box, StackDivider, Radio, RadioGroup, Divider} from '@chakra-ui/react'


interface CardProps {
  
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const ItemCard = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: CardProps) => {
  const mode = primary ? 'storybook-card--primary' : 'storybook-card--secondary';
  return (

  <Card>
  <CardHeader>
  <RadioGroup defaultValue='1'>
  <Stack>
    <Radio value='1'>

    <Heading size='md'>Client Report</Heading>
    </Radio>
  </Stack>
</RadioGroup>
</CardHeader>
  <Divider />
  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Text pt='2' fontSize='sm'>
          View a summary of all your clients over the last month.
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
  );
};
