import React, { FC, useLayoutEffect, useState } from 'react';
import { useConfig } from 'hooks/useConfig';
import styles from './SBPPage.module.scss';

interface SBPOptionsDTO {
  link: string;
}

const android12AndGreaterVersionCheck = (agent: string) => {
  const os = 'Android';
  const versionStartIndex = agent.indexOf(os) + os.length + 1;

  if (agent.indexOf(os) === -1) return false;

  return parseInt(agent[versionStartIndex]) === 1 && parseInt(agent[versionStartIndex + 1]) >= 2;
};

export const SBPPage: FC = () => {
  const params = useConfig<SBPOptionsDTO>();

  const [isAndroid12, setIsAndroid12] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (android12AndGreaterVersionCheck(navigator.userAgent)) {
      setIsAndroid12(true);
    } else {
      if (!params.link.startsWith('http')) return;
      window.location.href = params.link;
    }
  }, [isAndroid12]);


  switch (isAndroid12) {
  case false:
    return <>
      <p>Переадресация к платежному провайдеру...</p>
      <p>Redirecting to the payment provider...</p>
    </>;
  case true:
    return <iframe className={styles['frame']} src={params.link} frameBorder="no" />;
  }
};