import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home  from "./routes/Home";
import App from './App';
import Contact from './routes/Contact';
import ErrorPage from './elements/ErrorPage';


const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"*",
        element:<ErrorPage/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
