import './App.css';
import Main from './components/Layout/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About/About';
import Shoe from './components/Shoes/Shoe';
import Order from './components/Orders/Order';
import Inventory from './components/Inventory/Inventory';
import Contact from './components/Contact/Contact';
import { ProductsAndCartLoader } from './components/Loader/ProductsAndCartLoader';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main> , 
      children: [
        {
          path: '/',
          element: <Shoe></Shoe>
        },
        {
          path: '/order',
          loader: ProductsAndCartLoader,
          element: <Order></Order>
        },
        {
          path: '/inventory',
          element: <PrivateRoute> <Inventory></Inventory> </PrivateRoute>,
        },
        {
          path: '/shipping',
          element: <PrivateRoute><Shipping></Shipping></PrivateRoute>
        },
        {
          path:'/about',
          element: <About></About>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        }
    
      ]
    },

   
  ])
  return (
    <div>
      <RouterProvider router ={router}></RouterProvider>
    </div>
  );
}

export default App;
