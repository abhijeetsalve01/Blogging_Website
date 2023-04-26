import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";



import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import "./style.scss"


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      
    ],
  },


  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
]);


function App() {
  return (
    <div className="app">
      <div className="container">
      
      <RouterProvider router={router}/>
      

      </div>
    </div>
  );
}

export default App;
