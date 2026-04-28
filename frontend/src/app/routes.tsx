import { createBrowserRouter } from "react-router";
import Home from "./screens/Home";
import Search from "./screens/Search";
import Chat from "./screens/Chat";
import AppDetail from "./screens/AppDetail";
import Root from "./screens/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "search", Component: Search },
      { path: "chat", Component: Chat },
      { path: "app/:id", Component: AppDetail },
    ],
  },
]);
