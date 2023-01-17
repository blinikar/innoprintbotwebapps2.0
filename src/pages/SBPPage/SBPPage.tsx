import { useConfig } from 'hooks/useConfig';
import React, { FC, useLayoutEffect } from 'react';

interface SBPOptionsDTO {
    link: string;
}

export const SBPPage: FC = () => {
    const params = useConfig<SBPOptionsDTO>();
    
    useLayoutEffect(() => {
        console.log(params);
        if (!params.link.startsWith('http')) return;
        document.location.href = params.link;
    }, []);
    
    return <>
        <p>Redirecting to the payment provider...</p>
        <p>Переадресация к платежному провайдеру...</p>
    </>
}