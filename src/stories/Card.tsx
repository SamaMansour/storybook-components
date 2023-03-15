import React from 'react';
import './card.css';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Stack, Box, StackDivider, Radio, RadioGroup, Divider, Link, Icon} from '@chakra-ui/react'
import { MdSettings } from 'react-icons/md'
interface CardProps {
  
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  description?: string;
  value?: string
  onClick?: () => void;
}

export const ItemCard = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  description,
  value,
  ...props
}: CardProps) => {
  const mode = primary ? 'storybook-card--primary' : 'storybook-card--secondary';
  return (

  <Card>
  <CardHeader>
  <RadioGroup defaultValue='1'>
  <Stack>
    <Radio value='1'>
    <Heading size='md'>{label}</Heading>
    </Radio>
  </Stack>
</RadioGroup>
</CardHeader>
  <Divider />
  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Text pt='2' fontSize='sm'>
          {description}
        </Text>
         <Text color='blue.400' fontSize='1xl'>
          {value}
         </Text>
        <Link color= 'blue'>Show Items</Link>
      </Box>
    </Stack>
  </CardBody>
</Card>
  );
};
