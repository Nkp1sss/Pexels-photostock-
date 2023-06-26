import './App.scss';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from '../../layouts/RootLayout';
import Main from '../../pages/Main/Main';
import Notfound from '../../pages/Notfound/Notfound';
import Category from '../../pages/Category/Category';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Main />} />
        <Route path="search" element={<Navigate replace to="/" />} />
        <Route path="search/:query" element={<Category />} />
      </Route>
      <Route path="*" element={<Notfound />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
