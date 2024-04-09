import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider} from "react-router-dom";
import router from './Router/Router.jsx';
import AuthContextProvider from './AuthContexProvider/AuthContextProvider.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthContextProvider>
  <RouterProvider router={router} />
  </AuthContextProvider>
  </React.StrictMode>,
)
