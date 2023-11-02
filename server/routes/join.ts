import express, { Router } from "express";

import { joinRoom } from "../controllers/joinRoom";

export const router: Router = express.Router();

router.put("/", joinRoom)