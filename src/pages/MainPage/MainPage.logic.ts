import { MainPageProps } from './MainPage';
import { useEffect, useState } from 'react';

interface AbstractOptions {
  label: string;
  hint: string;
  value: string;
}

interface CounterOptions extends AbstractOptions {
  type: 'counter';
  errorText: string;
  min: number;
  max: number;
}

interface TextOptions extends AbstractOptions {
  type: 'text';
  pattern: string;
  errorText: string;
}

interface SelectOptions extends AbstractOptions {
  type: 'select';
  options: string[];
}

export type OptionsType = SelectOptions | CounterOptions | TextOptions;

type FormOptionsType = OptionsType;

const validator = (values: FormOptionsType[]): string[] => {
  const result: string[] = [];
  values.forEach((e) => {
    let error = '';
    switch (e.type) {
    case 'counter':
      if (isNaN(parseInt(e.value))) error = e.errorText;
      else if (parseInt(e.value) < e.min || parseInt(e.value) > e.max) error = e.errorText;
      break;
    case 'select':
      if (parseInt(e.value) < 0 && parseInt(e.value) >= e.options.length) error = 'Error';
      break;
    case 'text':
      if (!new RegExp(e.pattern).test(e.value)) error = e.errorText;
      break;
    }
    result.push(error);
  });

  return result;
};

export const useMainPageLogic = (props: MainPageProps) => {
  return {
    useForm: (initialValues: OptionsType[]) => {
      const [values, setValues] = useState<FormOptionsType[]>(initialValues);
      const [errors, setErrors] = useState<string[]>(validator(values));

      const getChangeValueHandler = (label: string) => {
        const index = values.findIndex((e) => e.label === label);
        return (newValue: string) => {
          const newValues = [...values];
          newValues[index].value = newValue;
          setValues(newValues);
        };
      };

      const getApplyActionHandler = (label: string) => {
        const index = values.findIndex((e) => e.label === label);
        return (action: 'increment' | 'decrement') => {
          const newValues = [...values];
          const oldValueObject = newValues[index];
          const oldValue = parseInt(oldValueObject.value);
          if (isNaN(oldValue)) return;
          if (oldValueObject.type === 'counter')
            if ((oldValueObject.min === oldValue && action === 'decrement')
              || (oldValueObject.max === oldValue && action === 'increment')) return;
          newValues[index].value = (action === 'increment' ? oldValue + 1 : oldValue - 1).toString();
          setValues(newValues);
        };
      };

      const getError = (label: string) => {
        const index = values.findIndex((e) => e.label === label);
        return errors[index];
      };

      const noErrors = () => {
        for (const e of errors)
          if (e !== '') return false;
        return true;
      };

      const getValues = (): (string | number)[] => {
        if (!noErrors()) return [];

        return values.map((e) => {
          switch (e.type) {
          case 'text':
            return e.value;
          case 'select':
          case 'counter':
            return parseInt(e.value);
          }
        });
      };

      useEffect(() => {
        setErrors(validator(values));
      }, [values]);

      return { values, getChangeValueHandler, getApplyActionHandler, getError, getValues };
    }
  };
};