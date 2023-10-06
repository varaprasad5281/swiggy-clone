import React ,{lazy,Suspense} from 'react';
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


const Instamart =lazy(()=>import('./components/Instamart'))  //Lazy Loading{when you working with large scale applications then make the section wise components in a bundler in this way we can redce the unwanted rendering insted of render everytime we can make this render while clicked the spcific component}
// Upon On Demand Loading --> Upon render --> Suspend Loading



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
      },
      {
        path:'/instamart',
        element:<Suspense>
          <Instamart/>
        </Suspense>
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