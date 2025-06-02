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
import AuthProvider, { AuthContext } from './components/provider/AuthProvider.jsx';
import SignIn from './components/SignIn/SignIn.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';

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
      path: 'oderCoffee',
      element: <PrivateRoute><OderCoffee></OderCoffee></PrivateRoute>,
      loader: () => fetch('https://refresh-store-server.vercel.app/coffee')
    }, {
      path: 'addNewCoffee',
      element: <AddNewCoffee></AddNewCoffee>,
    },
    {
      path: 'oderCoffee/updateCoffee/:id',
      element: <UpdateCoffee></UpdateCoffee>,
      loader: (params) => fetch(`https://refresh-store-server.vercel.app/coffee/${params.id}`)
    },
    {
      path: 'oderCoffee/coffeeDetails/:id',
      element: <CoffeeDetails></CoffeeDetails>,
      loader: (params) => fetch(`https://refresh-store-server.vercel.app/coffee/${params.id}`)
    },
      ,
    {
      path: 'signIn',
      element: <SignIn></SignIn>
    },
    {
      path: 'signUp',
      element: <SignUp></SignUp>
    }

    ]
  }



]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
