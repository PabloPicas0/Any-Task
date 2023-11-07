import express, { Router } from "express";

import { createRoom, createTask, deleteTask } from "../controllers/createRoom";

export const router: Router = express.Router();

router.post("/", createRoom);
router.post("/task", createTask);
router.delete("/delete", deleteTask)
