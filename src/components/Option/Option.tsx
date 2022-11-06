import React from 'react';
import styles from './Option.module.scss';
import { Counter } from 'components/Option/Counter';
import { Select } from 'components/Option/Select';
import { Text } from 'components/Option/Text';

interface AbstractOptionProps {
  label: string;
  hint: string;
  currentValue: string;
  error: string;
  setValue: (value: string) => void;
}

interface CounterOptionProps extends AbstractOptionProps {
  type: 'counter';
  applyAction: (action: 'increment' | 'decrement') => void;
}

interface SelectOptionProps extends AbstractOptionProps {
  type: 'select';
  options: string[];
}

interface TextOptionProps extends AbstractOptionProps {
  type: 'text';
}

export type OptionProps = CounterOptionProps | TextOptionProps | SelectOptionProps;

export const Option: React.FC<OptionProps> = (props) => {
  const { label, hint, type, error } = props;

  let input;
  switch (type) {
  case 'counter':
    input = <Counter value={props.currentValue} setValue={props.setValue} applyAction={props.applyAction} />;
    break;
  case 'select':
    input = <Select value={props.currentValue} setValue={props.setValue} options={props.options} />;
    break;
  case 'text':
    input = <Text value={props.currentValue} setValue={props.setValue} />;
    break;
  }

  return <div className={styles['option']}>
    <h3 className={styles['title']}>{ label }</h3>
    { hint !== '' && <h5 className={styles['hint']}>{ hint }</h5> }
    <div className={styles['option-elements']}>
      { input }
    </div>
    { error !== '' && <h5 className={styles['error']}>{ error }</h5> }
  </div>;
};