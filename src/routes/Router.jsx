import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { Home } from "../pages";
import CreateUser from "../components/CreateUser";

function ErrorPage() {
  return <div className="p-4 text-red-500">Page not found!</div>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "create-user", element: <CreateUser /> }
    ]
  }
]);

export default function RouterComponent() {
  return <RouterProvider router={router} />;
}
