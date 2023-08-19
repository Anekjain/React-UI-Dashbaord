import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

function App() {
  const Layout = () => {
    return(
      <div className="main">
        <Navbar/>
        <div className="container">
        <div className="menu-container">
          <Menu/>
        </div>
        <div className="content-container">
          <Outlet/>
        </div>
        </div>
        <Footer/>
      </div>
    )
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/users',
          element: <Users/>
        },
        {
          path: '/products',
          element: <Products/>
        }
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
