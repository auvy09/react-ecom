
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';
import About from './Components/About/About';
import Shop from './Components/shop/Shop';
import Order from './Components/Oders/Order';
import Inventory from './Components/Inventory/Inventory';
import { ProductsAndCartLoader } from './Components/Loader/ProductsAndCartLoader';
import Login from './Components/login/Login';
import Signup from './Components/signup/Signup';
import Shipping from './Components/shipping/Shipping';
import PrivetRoute from './routes/PrivetRoute';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/shipping',

          element: <PrivetRoute><Shipping></Shipping></PrivetRoute>
        },
        {
          path: 'orders',
          loader: ProductsAndCartLoader,
          element: <Order></Order>
        },
        {
          path: 'inventory',
          element: <PrivetRoute><Inventory></Inventory></PrivetRoute>
        },
        {
          path: 'about',
          element: <About></About>

        },
        {
          path: '/login',
          element: <Login></Login>

        },
        {
          path: '/signup',
          element: <Signup></Signup>
        }

      ]
    },


  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
