import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <>
      <RouterProvider
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
        router={router}
      />
    </>
  );
}
