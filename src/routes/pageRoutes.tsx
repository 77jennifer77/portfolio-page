
import { ReactElement } from 'react';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';
import NotFound from '../pages/NotFound';

export interface PageRoute {
  name: string;
  path: string;
  element: ReactElement;
}

const pageRoutes: PageRoute[] = [
  {
    name: "Home",
    path: "/",
    element: <Home />
  },
  {
    name: "Resume",
    path: "/resume",
    element: <Resume />
  },
  {
    name: "Contact",
    path: "/contact",
    element: <Contact />
  },
  {
    name: "NotFound",
    path: "*",
    element: <NotFound />
  }
];

export default pageRoutes;
