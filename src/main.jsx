import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from "./Page/Home.jsx"
import './index.css'
import App from './App.jsx'
import ErrorPage from './Page/ErrorPage.jsx'
import { Provider } from 'react-redux'
import store from './State/Store.js'



const ProductList = lazy(()=>import('./Page/ProductList.jsx'))
const CartList = lazy(()=>import('./Page/CartList.jsx'))
const ProductDetail = lazy(()=>import('./Page/ProductDetail.jsx'))
const Checkout = lazy(()=>import('./Page/Checkout.jsx'))


const appRouter = createBrowserRouter([
     {
      path:'/',
      element:<App/>,
      errorElement:<ErrorPage/>,
      children:[
         {
          path:'/',
          element:<Home/>
         },
         {
          path:'/products',
          element:(
          <Suspense fallback={<div>Loading ....</div>}>
            <ProductList/>
          </Suspense>
          )
         },
         {
          path:"/cart",
          element:(
          <Suspense fallback={<div>Loading ....</div>}>
            <CartList/>
          </Suspense>
          )
         },
         {
            path:"/checkout",
            element:(
          <Suspense fallback={<div>Loading ....</div>}>
            <Checkout/>
          </Suspense>
          )
         },
         {
          path:"/productDetail/:id",
          element:(
          <Suspense fallback={<div>Loading ....</div>}>
            <ProductDetail/>
          </Suspense>
          )
         }
      ]
     }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

   <RouterProvider router={appRouter}/>
    </Provider>
  </StrictMode>,
)
