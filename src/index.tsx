import './styles.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Root from './routes/root';
import Index from './routes/Index/Index';
import LegalNotice from './routes/Legal/Notice';
import Impressum from './routes/Legal/Impressum';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "legal",
        element: <LegalNotice />,
      },
      {
        path: "impressum",
        element: <Impressum />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
