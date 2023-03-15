import React from 'react';
import './card.css';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Stack, Box, StackDivider, Radio, RadioGroup, Divider, Link, Icon, Center} from '@chakra-ui/react'
interface CardProps {
  
  primary?: boolean;
  borderColor?: string;
  size?: 'small' | 'medium' | 'large';
  language?: 'left' | 'right'
  label: string;
  description?: string;
  value?: string
  onSelect?: () => void;
}

export const ItemCard = ({
  primary = false,
  size = 'medium',
  language = 'right',
  borderColor,
  label,
  description,
  value,
  onSelect,
  ...props
}: CardProps) => {
    const [border, setBorder] = React.useState<string>();

  const mode = primary ? 'storybook-card--primary' : 'storybook-card--secondary';
  return (

  <Card w ='100%' borderColor= {borderColor} >
  <CardHeader>
  <RadioGroup defaultValue='1'>
  <Stack>
    <Radio value='1'>
    <Heading size='md' textAlign = {language}>{label}</Heading>
    </Radio>
  </Stack>
</RadioGroup>
</CardHeader>
  <Center>
  <Divider width = '80%'/>
  </Center>
  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box p ={12}>
        <Text pt='2' fontSize='sm' textAlign = {language}>
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
