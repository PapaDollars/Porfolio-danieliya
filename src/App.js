import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import PageError from './components/pageErreur/PageErreur';
import HomePage from './components/homePage/HomePage';
import Porfolio from './components/porfolio/Porfolio';
import Galerie from './components/galerie/Galerie';
import Contact from './components/contact/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Outlet /></div> ,
    errorElement: <PageError />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/porfolio',
        element: <Porfolio />
      },
      {
        path: '/galerie',
        element: <Galerie />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
