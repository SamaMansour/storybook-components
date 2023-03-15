import React from 'react';
import './grid.css';
import { Grid, GridItem } from '@chakra-ui/react'
import { ItemCard } from './Card';
interface GridProps {
  
  columns?: 'repeat(3, 1fr)' | 'repeat(4, 1fr)' | 'repeat(2, 1fr)';
  label: string;
  description?: string;
  value?: string
  onClick?: () => void;
}

export const ItemGrid = ({
  size = 'medium',
  columns = 'repeat(4, 1fr)',
  label,
  description,
  value,
  onClick,
  ...props
}: GridProps) => {
    const [border, setBorder] = React.useState<string>();

  return (

 <Grid templateColumns= { columns } gap={12}>
  <ItemCard  
  borderColor= {'grey'}
  size= {'small'}
  label = { label }
  description = { description }
  value = { value }
  onClick= { () => console.log("hello")} />
   <ItemCard  
  borderColor= {'grey'}
  size= {'small'}
  label = { label }
  description = { description }
  value ={ value }
  onClick= { () => console.log("hello")} />
   <ItemCard  
  borderColor= {'grey'}
  size= {'small'}
  label = { label }
  description = { description }
  value ={ value }
  onClick= { () => console.log("hello")} />
   <ItemCard  
  borderColor= {'grey'}
  size= {'small'}
  label = { label }
  description = { description }
  value ={ value }
  onClick= { () => console.log("hello")} />
</Grid>
  );
};
