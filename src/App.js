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
import Curso from './routes/Curso';
import Asesoramiento from './routes/Asesoramiento';
import Contacto from './routes/Contacto';
import Notificaciones from './routes/Notificaciones';
import Calificaciones from './routes/Calificaciones';
import Calendario from './routes/Calendario';
import Materiales from './routes/Materiales';
import Pruebas from './routes/Pruebas';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "", element: <Home /> },
      { path: "/Home", element: <Home /> },
      { path: "/Cursos", element: <Cursos />},
      { path: "/Cursos/:id", element: <Curso />},
      { path: "/Asesoramiento", element: <Asesoramiento /> },
      { path: "/Contacto", element: <Contacto /> },
      { path: "/Notificaciones", element: <Notificaciones /> },
      { path: "/Calificaciones", element: <Calificaciones /> },
      { path: "/Calendario", element: <Calendario /> },
      { path: "/Materiales", element: <Materiales /> },
      { path: "/Pruebas", element: <Pruebas /> }
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
