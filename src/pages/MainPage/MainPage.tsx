import React, { FC, useLayoutEffect, useRef } from 'react';
import styles from './MainPage.module.scss';
import { useMainPageLogic, FormOptionsDTO } from './MainPage.logic';
import { Option } from 'components/Option';
import { useConfig } from 'hooks/useConfig';

export const MainPage: FC = () => {
  const logic = useMainPageLogic();
  const config = useConfig<FormOptionsDTO>();
  
  const {
    values, getChangeValueHandler, getApplyActionHandler, getError, getValues, noErrors
  } = logic.useForm(config.parameters);

  const submit = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', import.meta.env.VITE_API_BASE_URL + '/events/', true);

    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(JSON.stringify({
      jobID: config.jobID,
      values: getValues()
    }));
  };

  const button = useRef<any>();
  useLayoutEffect(() => {
    Telegram.WebApp.ready();
    button.current = Telegram.WebApp.MainButton.setText(config.buttonText).show();
  }, []);

  useLayoutEffect(() => {
    const onButtonClick = () => {
      if (!noErrors()) return;
      submit();
      Telegram.WebApp.close();
    };

    if (button.current) {
      button.current.onClick(onButtonClick);

      if (noErrors()) button.current.enable();
      else button.current.disable();

      return () => button.current.offClick(onButtonClick);
    }
  }, [noErrors]);

  return <div className={styles['content']}>
    {values.length > 0 &&
      values.map((option, index) => {
        switch (option.type) {
        case 'counter':
          return <Option
            key={index}
            type={option.type}
            label={option.label}
            hint={option.hint}
            currentValue={option.value}
            error={getError(option.label)}
            setValue={getChangeValueHandler(option.label)}
            applyAction={getApplyActionHandler(option.label)}
          />;
        case 'text':
          return <Option
            key={index}
            type={option.type}
            label={option.label}
            hint={option.hint}
            currentValue={option.value}
            error={getError(option.label)}
            setValue={getChangeValueHandler(option.label)}
          />;
        case 'select':
          return <Option
            key={index}
            type={option.type}
            label={option.label}
            hint={option.hint}
            currentValue={option.value}
            error={getError(option.label)}
            setValue={getChangeValueHandler(option.label)}
            options={option.options}
          />;
        }
      })}

    {/*<button onClick={() => {*/}
    {/*  if (!noErrors()) return;*/}
    {/*  submit();*/}
    {/*  console.log('hello');*/}
    {/*}}>TEST</button>*/}
  </div>;
};