
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Homepage from './Pages/Homepage/Homepage';
import Aboutpage from './Pages/Aboutpage/Aboutpage';

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
