import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddToCoffee from './AddToCoffee.jsx';
import UpdateCoffee from './UpdateCoffee.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:< App />,
    loader:()=>fetch('http://localhost:4000/coffee')
  },
  {
    path:'/addCoffee',
    element:<AddToCoffee></AddToCoffee>
  },
  {
    path:'/updateCoffee/:id',
    element:<UpdateCoffee/>,
    loader:({params})=>fetch(`http://localhost:4000/coffee/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
