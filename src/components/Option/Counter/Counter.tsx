import React from 'react';
import styles from './Counter.module.scss';

export interface CounterProps {
  value: string;
  setValue: (value: string) => void;
  applyAction: (action: 'increment' | 'decrement') => void;
}

export const Counter: React.FC<CounterProps> = (props) => {
  const { value, setValue, applyAction } = props;

  return <div className={styles['number-spinner']}>
    <button className={styles['minus']} onClick={() => {applyAction('decrement');}}>-</button>
    <input
      className={styles['input']}
      type="number"
      value={value}
      onChange={(event) => {setValue(event.target.value);}}
    />
    <button className={styles['plus']} onClick={() => {applyAction('increment');}}>+</button>
  </div>;
};