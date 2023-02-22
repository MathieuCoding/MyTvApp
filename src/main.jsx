import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App'
import { Show } from './Show';
import { Actor } from './Actor';
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/show/:id",
    element: <Show />
  },
  {
    path: "/actor/:id",
    element: <Actor />
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
