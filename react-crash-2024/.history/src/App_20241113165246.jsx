import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={ <h1>MY APP</h1>}/>)
);

const App = () => {
  return <RouterProvider router={router}/>
}

export default App