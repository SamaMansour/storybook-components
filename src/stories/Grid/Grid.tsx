import React from 'react';
import './grid.css';
import { Grid, GridItem } from '@chakra-ui/react'
import { ItemCard } from '../Card/Card';
interface GridProps {
  
  columns?: 'repeat(3, 1fr)' | 'repeat(1, 1fr)' | 'repeat(2, 1fr)';
  language?: 'left' | 'right';
  item?: ''| 'Show Items';
  label: string;
  description?: string;
  value?: string
  onClick?: () => void;
}

export const ItemGrid = ({
  columns = 'repeat(3, 1fr)',
  label,
  item = '',
  language,
  description,
  value,
  onClick,
  ...props
}: GridProps) => {
    const [border, setBorder] = React.useState<string>();

  return (

 <Grid templateColumns= { columns } gap={12}>
  <ItemCard  
  label = { label }
  language ={ language}
  item = {item}
  description = { description }
  value = { value }
  onClick= { () => console.log("hello")} />
   <ItemCard  
  label = { label }
  language ={ language}
  item = {item}
  description = { description }
  value ={ value }
  onClick= { () => console.log("hello")} />
   <ItemCard  
  label = { label }
  language ={ language}
  item = {item}
  description = { description }
  value ={ value }
  onClick= { () => console.log("hello")} />
   <ItemCard  
  label = { label }
  language ={ language}
  item = {item}
  description = { description }
  value ={ value }
  onClick= { () => console.log("hello")} />
</Grid>
  );
};
