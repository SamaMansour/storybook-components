import React from 'react';
import './grid.css';
import { Grid, GridItem } from '@chakra-ui/react'
import { ItemCard } from './Card';
interface GridProps {
  
  primary?: boolean;
  borderColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  description?: string;
  value?: string
  onSelect?: () => void;
}

export const ItemGrid = ({
  primary = false,
  size = 'medium',
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

 <Grid templateColumns='repeat(3, 1fr)' gap={3}>
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
  label = { label }
  description = { description }
  value ={ value }
  onSelect= { () => console.log("hello")} />
   <ItemCard  
  primary= {false}
  borderColor= {'grey'}
  size= {'small'}
  label = { label }
  description = { description }
  value ={ value }
  onSelect= { () => console.log("hello")} />
   <ItemCard  
  primary= {false}
  borderColor= {'grey'}
  size= {'small'}
  label = { label }
  description = { description }
  value ={ value }
  onSelect= { () => console.log("hello")} />
</Grid>
  );
};
