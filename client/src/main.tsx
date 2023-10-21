import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";

import CreateRoomForm from "./Routes/CreateRoomForm.tsx";
import JoinRoomForm from "./Routes/JoinRoomForm.tsx";
import Room from "./Routes/Room.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create",
    element: <CreateRoomForm />,
  },
  {
    path: "/join",
    element: <JoinRoomForm />,
  },
  {
    path: "/room/:id",
    element: <Room />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
