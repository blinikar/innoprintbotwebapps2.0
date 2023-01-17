import React, { FC, useLayoutEffect } from 'react';
import { useConfig } from 'hooks/useConfig';
import styles from './SBPPage.module.scss';

interface SBPOptionsDTO {
    link: string;
}

export const SBPPage: FC = () => {
    const params = useConfig<SBPOptionsDTO>();
    
    // useLayoutEffect(() => {
    //     console.log(params);
    //     if (!params.link.startsWith('http')) return;
    //     document.location.href = params.link;
    // }, []);
    
    return <iframe className={styles['frame']} src={params.link} frameBorder="no" />;
}