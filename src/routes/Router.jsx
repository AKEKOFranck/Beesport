import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Master from '../pages/Master';
import About from '../pages/About';
import InstallBT from '../pages/InstallBT';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/Master',
        element:<Master/>
      },
      {
        path:'/About',
        element:<About/>
      },
       {
        path:'/InstallBT',
        element:<InstallBT/>
      },
     
    ]
  }
]);

export default router;