import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";

import CreateRoomForm from "./Routes/CreateRoomForm.tsx";
import JoinRoomForm from "./Routes/JoinRoomForm.tsx";
import Room from "./Routes/Room.tsx";
import ErrorPage from "./Routes/ErrorPage.tsx";

import { getRoomDetails } from "./Utils/getRoomDetails.ts";

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
    loader: async ({ params, request }) => {
      const url = new URL(request.url)
      const username = url.searchParams.get("username");

      const roomDetails = await getRoomDetails(params.id, username)

      if (!roomDetails) throw new Error("Cannot find room.")

      console.log(roomDetails)

      return null;
    },
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
