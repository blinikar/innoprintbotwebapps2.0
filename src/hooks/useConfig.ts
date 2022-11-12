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

interface OptionsDTO {
  buttonText: string;
  parameters: OptionsType[];
  jobID: string;
}

export const useConfig = () => {
  const queryParameters = new URLSearchParams(window.location.search);
  const data = queryParameters.get('data');
  let result: OptionsDTO = { buttonText: 'SAVE', parameters: [], jobID: '' };
  if (data) result = JSON.parse(atob(data)) as OptionsDTO;
  return result;
};