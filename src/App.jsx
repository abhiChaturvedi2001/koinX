import React from "react";
import Navbar from "./components/Navbar";
import { createBrowserRouter, Outlet } from "react-router-dom";
import SinglePage from "./components/SinglePage";
import CoinsList from "./components/CoinsList";

const App = () => {
  return (
    <>
      <div className="bg-gray-100 h-full w-full">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/:id",
        element: <SinglePage />,
      },
      {
        path: "/",
        element: <CoinsList />,
      },
    ],
  },
]);

export default App;
