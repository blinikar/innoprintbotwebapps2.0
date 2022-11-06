import React, { useEffect } from 'react';
import styles from './MainPage.module.scss';
import { useMainPageLogic } from './MainPage.logic';
import { Option } from 'components/Option';
import { useConfig } from 'hooks/useConfig';

export interface MainPageProps {
}

export const MainPage: React.FC<MainPageProps> = (props) => {
  const logic = useMainPageLogic(props);
  const config = useConfig();
  const { values, getChangeValueHandler, getApplyActionHandler, getError, getValues } = logic.useForm(config);

  const submit = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', import.meta.env.VITE_API_BASE_URL + '/add_event', false);

    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(JSON.stringify(getValues()));
  };

  useEffect(() => {
    Telegram.WebApp.ready();
    Telegram.WebApp.MainButton.setText('SAVE').show().onClick(function () {
      // submit();
      Telegram.WebApp.close();
    });
  }, []);

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

    <button onClick={() => {
      submit();
    }}>TEST</button>
  </div>;
};