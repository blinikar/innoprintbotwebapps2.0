import React from 'react';
import styles from './NotFoundPage.module.scss';
import { useNotFoundPageLogic } from './NotFoundPage.logic';

export interface NotFoundPageProps {
}

export const NotFoundPage: React.FC<NotFoundPageProps> = (props) => {
  const logic = useNotFoundPageLogic(props);

  return <h1>
    404
  </h1>;
};