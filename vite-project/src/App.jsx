import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Root from "./components/Root";
import TodosPage from "./components/pages/ProductsPage";
import ProductPage from "./components/pages/ProductPage";
import AddProductPage from "./components/pages/AddProductPage";
import EditPage from "./components/pages/EditPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      { path: "/products", element: <TodosPage /> },
      {
        path:'/product/:id', element: <ProductPage/>
      },
      
      {
        path: '/add/product', element: <AddProductPage/>
      },
      {
        path:'/newProduct/:id', element: <ProductPage/>
      },
      {
        path:'/editProduct/:id', element: <EditPage/>
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
