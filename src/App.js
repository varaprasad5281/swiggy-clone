import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Cart from "./components/Cart";
import Error from './components/Error';
import Profile from './Profile';
import {
  createBrowserRouter,RouterProvider,Outlet
} from "react-router-dom";
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';




const App=()=> {

  return (
    <div className="App">
      <Header/>
      <Outlet/>
      <Footer/>
      
      
    </div>
  );
}
export default App
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>,

      },
      {
        path:"/about",
        element:<About/>,
        children:[
          {
            path:"profile",
            element:<Profile/>
          }
        ]

      },
      {
        path:"/contact",
        element:<Contact/>,

      },
      {
        path:'restaurant/:resId',
        element:<RestaurantMenu/>
      },
      {
        path:'cart',
        element:<Cart/>
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);