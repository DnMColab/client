import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.sass";
import Layout from "./modules/Layout/Layout.tsx";
import MainPage from "./pages/MainPage/MainPage.tsx";
import Profile from "./pages/Profile/Profile.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><MainPage/></Layout>,
  },
  {
    path: "/profile/:id",
    element: <Layout><Profile/></Layout>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
