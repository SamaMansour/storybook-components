import React from 'react';
import './card.css';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Stack, Box, StackDivider, Radio, RadioGroup, Divider, Link, Icon, Center, Button, Spacer, ButtonGroup} from '@chakra-ui/react';
import { createIcon } from '@chakra-ui/icons';
import { MdStarRate, MdEdit } from 'react-icons/md'

/* eslint-disable */
interface CardProps {
  
  language?: 'left' | 'right'
  item?: ''| 'Show Items'
  label: string;
  description?: string;
  value?: string
  onClick?: () => void;
}

export const ItemCard = ({
  language = 'right',
  item = '',
  label,
  description,
  value,
  onClick,
  ...props
}: CardProps) => {
  const [border, setBorder] = React.useState('white');
  const [buttonValue, setButtonValue] = React.useState('2')
  const [icon, setIcon] = React.useState('white')
  const controlBorder = ()=>{
    setButtonValue('1');
    console.log("hello");
    setBorder('grey.400')

  }

  const controlColor = ()=>{
    setIcon('grey');
  }

  return (

  <Card w ='100%' border='1px' borderColor= {border}>
  <CardHeader>
  <RadioGroup  onChange={controlBorder} value={buttonValue}>
  <Stack spacing={16} direction='row'>
    <Radio value='1' onClick = {()=> setBorder('grey')}>
    <Heading size='md' textAlign = {language}>{label}</Heading>
    </Radio>
      <Spacer />
    <ButtonGroup spacing='6' pr={0}>
      <Button w='50%' onClick= {controlColor} colorScheme='whiteAlpha' leftIcon={ <Icon as={MdStarRate} w={8} h={8} color={icon} />}>
      </Button>
      <Button w='50%' onClick = {controlColor} colorScheme='whiteAlpha' leftIcon={ <Icon as={MdEdit} w={8} h={8} color={icon} />}>
      </Button>
</ButtonGroup>
  </Stack>
</RadioGroup>


</CardHeader>
  <Center>
  <Divider width = '80%' />
  </Center>
  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box p ={12} >
        <Text pt='2' fontSize='sm' textAlign = {language}>
          {description}
        </Text>
         <Text color='blue.400' fontSize='1xl'>
          {value}
         </Text>
        <Link color= 'blue'>{item}</Link>
      </Box>
    </Stack>
  </CardBody>
</Card>
  );
};
