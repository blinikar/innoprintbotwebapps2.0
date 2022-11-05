import React from 'react';
import styles from './MainPage.module.scss';
import { useMainPageLogic } from './MainPage.logic';
import { CoolRectangle } from 'components/CoolRectangle/CoolRectangle';

export interface MainPageProps {
}

export const MainPage: React.FC<MainPageProps> = (props) => {
  const logic = useMainPageLogic(props);

  return <div className={styles['centering-wrapper']}>
    <div className={styles['content']}>
      <h1>You are good to go!</h1>
      <p> Check out this cool component below: </p>
      <CoolRectangle/>
    </div>
  </div>;
};