import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import MainLayout from './components/MainLayout/MainLayout.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import OderCoffee from './components/OderCoffee/OderCoffee.jsx';
import AddNewCoffee from './components/AddNewCoffee/AddNewCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
   children: [{
      path: '/',
      element: <Home></Home>,
        },
        {
             path:'/oderCoffee',
      element: <OderCoffee></OderCoffee>,
            },{
            path: '/addNewCoffee',
      element: <AddNewCoffee></AddNewCoffee>,
        }
  ]
  }



]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
