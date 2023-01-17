import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { SBPPage } from 'pages/SBPPage';

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='form' element={<MainPage />} />
        <Route path='sbp' element={<SBPPage />} />
        <Route path='*' element={<p>
          You are not supposed to be here.{' '}
          <br />
          Contact bot support to resolve this error
        </p>} />
      </Routes>
    </BrowserRouter>
  );
};
