import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './styles/global.styles.ts'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RootLayout } from './components/RootLayout/RootLayout.tsx';
import { Categories } from './pages/Categories/Categories.tsx';
import { CreateCategory } from './pages/Categories/CreateCategory.tsx';
import { Products } from './pages/Products/Products.tsx';
import { CreateProduct } from './pages/Products/CreateProduct.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        path: '/categories',
        element: <Categories/>,
      },
      {
        path: '/categories/create',
        element: <CreateCategory/>,
      },
      {
        path: '/products',
        element: <Products/>
      },
      {
        path: '/products/create',
        element: <CreateProduct/>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
