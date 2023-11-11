import express, { Router } from "express";

import { completeTask, createRoom, createTask, deleteTask } from "../controllers/createRoom";

export const router: Router = express.Router();

router.post("/", createRoom);

router.post("/task", createTask);
router.put("/task", completeTask)
router.delete("/task", deleteTask)
