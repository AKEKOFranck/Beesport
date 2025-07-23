import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Master from '../pages/Master';


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
     
    ]
  }
]);

export default router;