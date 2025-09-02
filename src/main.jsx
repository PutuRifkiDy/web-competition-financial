import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BlogPage from "./pages/BlogPage";
import RuteKeuangan from "./pages/RuteKeuangan";
import DetailBlogPage from "./pages/DetailBlogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/rute-keuangan",
    element: <RuteKeuangan />,
  },
  {
    path: "/detail-blog",
    element: <DetailBlogPage />,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
