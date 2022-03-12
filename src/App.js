import { Route, Routes } from 'react-router-dom';

import {LoginPage, DashBoardPage, PageNotFound} from './pages'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<LoginPage/>}/>
        <Route path="dashboard" element={<DashBoardPage/>}>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
