import { useState } from 'react'
import './App.css'
import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import HomePage from './pages/Home';
import CartPage from './pages/Cart';
import LoginPage from './pages/Login';
import { AuthContext, authValue } from './hooks/contexts/useAuth';
import { ThemeContext, themeValue } from './hooks/contexts/useTheme';
import { HttpProductRepository } from '../data/repositories/ProductRepository/HttpProductRepository';

function App() {
    
    const router = createBrowserRouter([
        {
          path: "/",
          children: [
            { index:true, element: <Navigate to="/home" replace />},
            {
              path: "home",
              element: <HomePage productRepository={new HttpProductRepository()}/>
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
        <ThemeContext.Provider value={themeValue}>
            <AuthContext.Provider value={authValue}>
                <RouterProvider router={router} />
            </AuthContext.Provider>
        </ThemeContext.Provider>
    )
}

export default App
