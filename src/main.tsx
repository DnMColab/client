import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.sass";
import Layout from "./modules/Layout/Layout.tsx";
import MainPage from "./pages/MainPage/MainPage.tsx";
import Profile from "./pages/Profile/Profile.tsx";
import Search from "./pages/Search/Search.tsx";
import Notifications from "./pages/Notifications/Notifications.tsx";
import Trends from "./pages/Trends/Trends.tsx";
import Random from "./pages/Random/Random.tsx";
import Settings from "./pages/Settings/Settings.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <MainPage />
      </Layout>
    ),
  },
  {
    path: "/profile/:id",
    element: (
      <Layout>
        <Profile />
      </Layout>
    ),
  },
  {
    path: "/search/",
    element: (
      <Layout>
        <Search />
      </Layout>
    ),
  },
  {
    path: "/notifications",
    element: (
      <Layout>
        <Notifications />
      </Layout>
    ),
  },
  {
    path: "/trends",
    element: (
      <Layout>
        <Trends />
      </Layout>
    ),
  },
  {
    path: "/random",
    element: (
      <Layout>
        <Random />
      </Layout>
    ),
  },
  {
    path: "/settings",
    element: (
      <Layout>
        <Settings />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
