import express, { Router } from "express";

import createRoom from "../controllers/createRoom";

export const router: Router = express.Router();

router.post("/", createRoom)