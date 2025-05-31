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
import SignUp from './components/Signup/SignUp.jsx';
import UpdateCoffee from './UpdateCoffee/UpdateCoffee.jsx';
import CoffeeDetails from './UpdateCoffee/CoffeeDetails/CoffeeDetails.jsx';

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
             path:'oderCoffee',
      element: <OderCoffee></OderCoffee>,
      loader:()=>fetch('http://localhost:5000/coffee')
            },{
            path: 'addNewCoffee',
      element: <AddNewCoffee></AddNewCoffee>,
        },
        {
          path:'oderCoffee/updateCoffee/:id',
          element:<UpdateCoffee></UpdateCoffee>,
          loader:(params)=>fetch(`http://localhost:5000/coffee/${params.id}`)
        },
        {
          path:'oderCoffee/coffeeDetails/:id',
          element:<CoffeeDetails></CoffeeDetails>,
          loader:(params)=>fetch(`http://localhost:5000/coffee/${params.id}`)
        },
        
        {
          path:'signUp',
          element: <SignUp></SignUp>
        }

  ]
  }



]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
