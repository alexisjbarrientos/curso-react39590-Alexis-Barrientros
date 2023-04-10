import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// react-router
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
//router
import Layout from './components/Layout';
import Root from './Routes/Root';
import ItemRoot from "./Routes/ItemRoot";
import Cart from "./Routes/cart";




const router = createBrowserRouter([
{   
    path: "/",
    // errorElement:<errorpage/>,
    element :<Layout /> ,
     children : [
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
      element: <Cart/>,
    },
    {
     path: "/checkout",
     element: <div>Hello world!</div>,
   },
  ]
}
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomProvider>
    <RouterProvider router={router} />
    </CustomProvider>
  </React.StrictMode>,
);



import { initializeApp } from "firebase/app";
import { CustomProvider } from './context';
const firebaseConfig = {
  apiKey: "AIzaSyALNk0UQFGUYTFBk1h0sxOP-Hc6QBg0R4c",
  authDomain: "react-barrientos-alexis.firebaseapp.com",
  projectId: "react-barrientos-alexis",
  storageBucket: "react-barrientos-alexis.appspot.com",
  messagingSenderId: "352099356855",
  appId: "1:352099356855:web:c8cf0c44f3409ade7fbd32"
};


const app = initializeApp(firebaseConfig);