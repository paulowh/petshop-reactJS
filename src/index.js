import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Pagina404 from './paginas/Pagina404';
import ContatoDetalhes from './paginas/ContatoR';
import Post from './paginas/Post';
import Categoria from './paginas/Categoria';
import Admin from './paginas/admin/Admin';
import FormCategoria from './paginas/admin/components/FormCategoria';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />
//   },
//   {
//     path: "sobre",
//     element: <Sobre />
//   },
//   {
//     path: "*",
//     element: <Pagina404 />
//   }
// ])

const router = createBrowserRouter([{
  path: "/",
  element: < App />,
  // errorElement: < Pagina404 />,
  children: [
    {
      path: "*",
      element: < Pagina404 />
    },
    {
      path: "/",
      element: < Home />
    },
    {
      path: "sobre",
      element: < Sobre />
    },
    {
      path: "contato/:id",
      element: < ContatoDetalhes />
    },
    {
      path: "posts/:id",
      element: < Post />
    },
    {
      path: "categoria/:id",
      element: < Categoria />
    },
    {
      path: "categoria/:id/:subcategoria",
      element: < Categoria />
    },
    {
      path: "/admin",
      element: < Admin />
    },
    {
      path: "/admin/NovaCategoria",
      element: <FormCategoria />
    },
    {
      path: "/admin/EditarCategoria/:id",
      element: <FormCategoria />
    }
  ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();