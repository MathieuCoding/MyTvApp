import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App'
import { Show } from './Show';
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/show/:id",
    element: <Show />
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
