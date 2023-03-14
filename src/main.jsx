import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// react-router
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
//router
import Root from './Routes/Root';
import ItemRoot from "./Routes/ItemRoot";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path: "/category/:id",
    element: <Root/>,
  },
  {
    path: "/item/:id",
    element: <ItemRoot/>,
  },
  {
    path: "/cart",
    element: <Root/>,
  },
  {
    path: "/checkout",
    element: <div>Hello world!</div>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
