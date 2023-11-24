import { useState } from 'react'
import './App.css'
import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import HomePage from './pages/Home';
import CartPage from './pages/Cart';
import LoginPage from './pages/Login';

function App() {
    const router = createBrowserRouter([
        {
          path: "/",
          children: [
            { index:true, element: <Navigate to="/home" replace />},
            {
              path: "home",
              element: <HomePage/>
            },
            {
              path: "cart",
              element: <CartPage/>
            },
            {
                path: "login",
                element: <LoginPage />,
            },
          ],
        },
      ]);
    
    return (
        <RouterProvider router={router} />
    )
}

export default App
