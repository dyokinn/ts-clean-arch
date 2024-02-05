import { useState } from 'react'
import './App.css'
import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import HomePage from './pages/Home';
import CartPage from './pages/Cart';
import LoginPage from './pages/Login';
import { AuthContext, authValue } from './hooks/contexts/useAuth';
import { ThemeContext, themeValue } from './hooks/contexts/useTheme';
import { CartContext, cartValue } from './hooks/contexts/useCart';

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
        <ThemeContext.Provider value={themeValue}>
            <AuthContext.Provider value={authValue}>
                <CartContext.Provider value={cartValue()}>
                    <RouterProvider router={router} />
                </CartContext.Provider>
            </AuthContext.Provider>
        </ThemeContext.Provider>
    )
}

export default App
