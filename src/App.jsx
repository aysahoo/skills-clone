import React from 'react'

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
  )
);
  return (
    <RouterProvider router={router}/>
  )
}

export default App
