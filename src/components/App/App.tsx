import './App.scss';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Main from '../../pages/Main/Main';
import Category from '../../pages/Category/Category';
import Notfound from '../../pages/Notfound/Notfound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Main />} />
      <Route path="search" element={<Navigate replace to="/" />} />
      <Route path="search/:query" element={<Category />} />
      <Route path="*" element={<Notfound />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
