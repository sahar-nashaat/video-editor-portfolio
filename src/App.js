import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Clients from './Components/Clients/Clients';
import Layout from './Components/Layout/Layout';
import One from './Components/One/One'; 
import Three from './Components/Three/Three'; 
import Two from './Components/Two/Two';
import Four from './Components/Four/Four';

let routers = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "services/heavy", element: <One /> },
      { path: "services/standard", element: <Two /> },
      { path: "services/light", element: <Three /> },
      { path: "services/coloring", element: <Four /> },
      { path: "about", element: <About /> },
      { path: "clients", element: <Clients /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routers}></RouterProvider>;
}

export default App;
