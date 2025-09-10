import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CoverPage from './components/CoverPage.jsx'
import MainPage from './components/MainPage.jsx'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  { path: '/', element: <CoverPage /> },
  {
    path: '/home',
    element: <App />,          // layout shell
    children: [
      { index: true, element: <MainPage /> },  // renders inside <Outlet />
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
