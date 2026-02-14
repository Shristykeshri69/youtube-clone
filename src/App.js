

import React from "react";
import Head from "./components/Header"; // Header
// import Body from "./components/Body"; 
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

// Layout component to include Header
const AppLayout = () => (
  <>
    <Head />
    <Outlet /> {/* Nested route components will render here */}
  </>
);

export default function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />, // Wrap Header here
      children: [
        { path: "/", element: <MainContainer /> },
        { path: "watch", element: <WatchPage /> },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}
