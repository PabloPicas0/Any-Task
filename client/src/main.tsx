import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";

import CreateRoomForm from "./Routes/CreateRoomForm.tsx";
import JoinRoomForm from "./Routes/JoinRoomForm.tsx";
import Room from "./Routes/Room.tsx";
import ErrorPage from "./Routes/ErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/create",
    element: <CreateRoomForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/join",
    element: <JoinRoomForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/room/:id",
    element: <Room />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
