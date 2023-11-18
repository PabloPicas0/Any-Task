import express, { Router } from "express";

import { completeTask, createComment, createRoom, createTask, deleteTask, editPermission } from "../controllers/createRoom";

export const router: Router = express.Router();

router.post("/", createRoom);

router.post("/task", createTask);
router.put("/task", completeTask);
router.delete("/task", deleteTask);

router.post("/commnet", createComment);

router.put("/permission", editPermission);
