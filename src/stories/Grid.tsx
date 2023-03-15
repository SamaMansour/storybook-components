import React from 'react';
import './grid.css';
import { Grid, GridItem } from '@chakra-ui/react'
import { ItemCard } from './Card';
interface GridProps {
  
  primary?: boolean;
  borderColor?: string;
  size?: 'small' | 'medium' | 'large';
  columns?: 'repeat(3, 1fr)' | 'repeat(6, 1fr)' | 'repeat(9, 1fr)';
  label: string;
  description?: string;
  value?: string
  onSelect?: () => void;
}

export const ItemGrid = ({
  primary = false,
  size = 'medium',
  columns = 'repeat(6, 1fr)',
  borderColor,
  label,
  description,
  value,
  onSelect,
  ...props
}: GridProps) => {
    const [border, setBorder] = React.useState<string>();

  const mode = primary ? 'storybook-card--primary' : 'storybook-card--secondary';
  return (

 <Grid templateColumns= { columns } gap={12}>
  <ItemCard  
  primary= {false}
  borderColor= {'grey'}
  size= {'small'}
  label = { label }
  description = { description }
  value = { value }
  onSelect= { () => console.log("hello")} />
   <ItemCard  
  primary= {false}
  borderColor= {'grey'}
  size= {'small'}
  language ={ 'left'}
  label = { label }
  description = { description }
  value ={ value }
  onSelect= { () => console.log("hello")} />
   <ItemCard  
  primary= {false}
  borderColor= {'grey'}
  size= {'small'}
  language ={ 'left'}
  label = { label }
  description = { description }
  value ={ value }
  onSelect= { () => console.log("hello")} />
   <ItemCard  
  primary= {false}
  borderColor= {'grey'}
  size= {'small'}
  language ={ 'left'}
  label = { label }
  description = { description }
  value ={ value }
  onSelect= { () => console.log("hello")} />
</Grid>
  );
};
