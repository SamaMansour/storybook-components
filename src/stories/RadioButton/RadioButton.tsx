import React from 'react';
import './radioButton.css';
import { Radio, RadioGroup } from '@chakra-ui/react'

interface RadioButtonItemProps {
 
  backgroundColor?: string;
  check?: 'isDisabled' | ' '
  label: string;
  onClick?: () => void;
}


export const RadioButtonItem = ({
  backgroundColor,
  label,
  check = 'isDisabled'
}: RadioButtonItemProps) => {
  return (
    <Radio value='1'>
    </Radio>
  );
};
