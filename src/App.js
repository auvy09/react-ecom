
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';
import About from './Components/About/About';
import Shop from './Components/shop/Shop';
import Order from './Components/Oders/Order';
import Inventory from './Components/Inventory/Inventory';
import { ProductsAndCartLoader } from './Components/Loader/ProductsAndCartLoader';



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
          path: 'orders',
          loader: ProductsAndCartLoader,
          element: <Order></Order>
        },
        {
          path: 'inventory',
          element: <Inventory></Inventory>
        },
        {
          path: 'about',
          element: <About></About>

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
