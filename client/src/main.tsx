import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";

import CreateRoomForm from "./Routes/CreateRoomForm.tsx";
import JoinRoomForm from "./Routes/JoinRoomForm.tsx";
import Room from "./Routes/Room.tsx";
import ErrorPage from "./Routes/ErrorPage.tsx";

import { getRoomDetails } from "./Utils/getRoomDetails.ts";
import updateTodo from "./Utils/updateTodo.ts";
import deleteTodo from "./Utils/deleteTodo.ts";
import completeTodo from "./Utils/completeTodo.ts";
import addCommnet from "./Utils/addCommnet.ts";
import editPermissions from "./Utils/editPermissions.ts";

const router = createHashRouter([
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
      const url = new URL(request.url);
      const username = url.searchParams.get("username");

      const roomDetails = await getRoomDetails(params.id, username);

      if (!roomDetails) throw new Error("Cannot find room.");

      return { roomDetails };
    },
    action: async ({ request, params }) => {
      const formData = await request.formData();
      const intent = formData.get("intent");

      if (intent === "add") {
        const todo = formData.get("todo");

        if (!params.id || !todo) throw new Error("Invalid request");

        await updateTodo(params.id, todo);

        return { ok: true };
      }

      if (intent === "delete") {
        const taskId = formData.get("taskId");

        await deleteTodo(taskId);

        return { ok: true };
      }

      if (intent === "complete") {
        const taskId = formData.get("taskId");
        const isActive = formData.get("isActive");

        await completeTodo(taskId, isActive);

        return { ok: true };
      }

      if (intent === "comment") {
        const url = new URL(request.url);
        const username = url.searchParams.get("username");

        await addCommnet(formData, username);

        return { ok: true };
      }

      if (intent === "permission") {
        await editPermissions(formData);

        return { ok: true };
      }

      return { ok: false };
    },
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
