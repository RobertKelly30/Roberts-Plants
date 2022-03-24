import { AddPlantPanel, AllPlantsPanel, CategoriesPanel, FavoritesPanel, OrdersPanel, ReviewsPanel } from 'components/panels';
import { Route, Routes } from 'react-router-dom';

import {LoginPage, DashBoardPage, PageNotFound} from './pages'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<LoginPage/>}/>
        <Route path="dashboard" element={<DashBoardPage/>}>
          <Route index element={<AllPlantsPanel title="All Products"/>}/>
          <Route path='addPlant' element={<AddPlantPanel title="Add Plant"/>}/>
          <Route path='categories' element={<CategoriesPanel title="Categories"/>}/>
          <Route path='favorites' element={<FavoritesPanel title="Favorites"/>}/>        
          <Route path='orders' element={<OrdersPanel title="Orders"/>}/>
          <Route path='reviews' element={<ReviewsPanel title="Reviews"/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
