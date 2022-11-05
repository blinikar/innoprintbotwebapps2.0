import React, { useEffect, useState } from 'react';
import styles from './CoolRectangle.module.scss';
import { useCoolRectangleLogic } from './CoolRectangle.logic';
import { useToggle } from 'hooks/useToggle/useToggle';

export interface CoolRectangleProps {
}

export const advicePieces = [
  'I\'m really cool! And so are you!',
  'It\'s gonna be alright!',
  'The starter had started!',
  'Vite is really cool!',
  'We were no strangers to love...',
];

export const CoolRectangle: React.FC<CoolRectangleProps> = (props) => {
  const logic = useCoolRectangleLogic(props);
  const [open, toggleOpen] = useToggle(false);
  const [advice, setAdvice] = useState(0);

  useEffect(() => {
    if(open) {
      setAdvice(advice === advicePieces.length - 1 ? 0 : advice + 1);
    }
  }, [open]);

  const rectanglePositionClass = open ? styles.rectangleOpen : styles.rectangle;

  return <div className={styles.rectangleSlot}>
    <div className={styles.advice}>{advicePieces[advice]}</div>
    <div className={rectanglePositionClass} onClick={toggleOpen}>

    </div>
  </div>;
};