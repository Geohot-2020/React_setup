import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
MainLayout
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';


const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={ <HomePage /> } />)
);

const App = () => {
  return <RouterProvider router={router}/>
}

export default App