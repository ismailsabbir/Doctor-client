
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Homepage from './Pages/Homepage/Homepage';
import Aboutpage from './Pages/Aboutpage/Aboutpage';
import Blogpages from './Pages/Blogpages/Blogpages';
import Contactpages from './Pages/Contactpages/Contactpages';
import Servicespages from './Pages/Servicespages/Servicespages';
import Servicedetails from './Pages/Servicesdetails/Servicedetails';
import Signuppages from './Pages/Signuppages/Signuppages';
import Loginpages from './Pages/Loginpages/Loginpages';
import Appoinmentpages from './Pages/Appoinmentpages/Appoinmentpages';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Homepage></Homepage>
        },
        {
          path:'/home',
          element:<Homepage></Homepage>
        },
        {
          path:'/about',
          element:<Aboutpage></Aboutpage>
        },
        {
          path:'/services',
          element:<Servicespages></Servicespages>
        },
        {
          path:'/servicedetails/:id',
          element:<Servicedetails></Servicedetails>,
          loader:async({params})=>{
            return fetch(`https://doctor-server-ismailsabbir.vercel.app/services/${params.id}`)
          }
        },
        {
          path:'/blog',
          element:<Blogpages></Blogpages>
        },
        {
          path:'/contact',
          element:<Contactpages></Contactpages>
        },
        {
          path:'/signup',
          element:<Signuppages></Signuppages>
        },
        {
          path:'login',
          element:<Loginpages></Loginpages>
        },
        {
          path:'/appoinment',
          element:<Appoinmentpages></Appoinmentpages>
        },
        {
          path:'*',
          element:<div>not found</div>
        }
      ]
    }
  ])
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
