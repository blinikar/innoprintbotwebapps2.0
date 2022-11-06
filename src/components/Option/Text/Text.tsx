import React from 'react';
import styles from './Text.module.scss';

export interface TextProps {
  value: string;
  setValue: (value: string) => void;
}

export const Text: React.FC<TextProps> = (props) => {
  return <input
    className={styles['input-text']}
    onChange={(event) => {props.setValue(event.target.value);}}
    type='text'
    value={props.value}
    min='1'
    max='99'
  />;
};