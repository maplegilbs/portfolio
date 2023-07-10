import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { About } from './pages/About.jsx';
import { Projects } from './pages/Projects.jsx';
import { Work } from './pages/Work.jsx';
import { Personal } from './pages/Personal.jsx';
import { Contact } from './pages/Contact.jsx';

import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <About />,
    children: [
      { 
        index: true,
        element: <About />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'work',
        element: <Work />
      },
      {
        path: 'personal',
        element: <Personal />
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ]
  },
  // Add more page routes below
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
