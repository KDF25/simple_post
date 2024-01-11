import React, { InputHTMLAttributes, FC } from 'react';
import classes from './MyInput.module.css';

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const MyInput: FC<MyInputProps> = (props) => {
  return <input className={classes.myInput} {...props} />;
};