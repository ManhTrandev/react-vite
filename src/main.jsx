import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <div>Login page</div>,
  },
  {
    path: '/register',
    element: <div>Register page</div>,
  },
  {
    path: '/users',
    element: <div>Users page</div>,
  },
  {
    path: '/products',
    element: <div>Products page</div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
