import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Layouts
import Layout from './components/Layout/Layout'
import LayoutLogin from './components/Layout/LayoutLogin';
import NotFound from './components/NotFound/NotFound';

// Routes
import Home from './routes/Home';
import Login from './routes/Login';
import Cursos from './routes/Cursos';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "", element: <Home /> },
      { path: "/Home", element: <Home /> },
      { path: "/Cursos", element: <Cursos />}
    ]
  },
  {
    path: "/Login",
    layout: <LayoutLogin />,
    errorElement: <NotFound />,
    children: [
      { path: "/Login", element: <Login /> }
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
