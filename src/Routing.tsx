import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};
