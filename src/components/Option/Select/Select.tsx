import React from 'react';
import cx from 'classnames';
import styles from './Select.module.scss';

export interface SelectProps {
  value: string;
  setValue: (value: string) => void;
  options: string[];
}

export const Select: React.FC<SelectProps> = (props) => {
  const { value, setValue, options } = props;
  const choice = parseInt(props.value);

  return <div className={styles['select']}>
    {
      props.options.map((e, i) => (
        <button
          key={i}
          className={cx(styles['select-button'], i === choice && styles['active'])}
          onClick={() => {setValue(i.toString());}}
        >{e}</button>
      ))
    }
  </div>;
};