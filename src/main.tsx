import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routing } from 'Routing';
import 'styles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Routing/>
  </React.StrictMode>
);
