import express, { Router } from "express";

import { createRoom, createTask } from "../controllers/createRoom";

export const router: Router = express.Router();

router.post("/", createRoom);
router.post("/task", createTask);
