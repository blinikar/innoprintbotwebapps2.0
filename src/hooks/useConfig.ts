import { OptionsType } from 'pages/MainPage';

const initialValuesArrayMock: OptionsType[] = [
  {
    type: 'counter',
    label: 'Copies',
    hint: 'text',
    value: '1',
    min: 1,
    max: 100,
    errorText: 'Can be only number from 1 to 100'
  },
  {
    type: 'text',
    label: 'Pages',
    hint: '',
    value: '1',
    pattern: '^\\d+(?:-\\d+)?(?:,\\d+(?:-\\d+)?)*$',
    errorText: 'Validation error'
  },
  {
    type: 'select',
    label: 'Options',
    hint: '',
    options: ['op0', 'op1'],
    value: '1'
  }
];

export const useConfig = <T>() => {
  let result = undefined;
  
  const queryParameters = new URLSearchParams(window.location.search);
  const data = queryParameters.get('data');

  if (data) {
    result = JSON.parse(atob(data)) as T;
  }
  
  return result as T;
};