import express, { Router } from "express";

import { joinRoom, roomDetails } from "../controllers/joinRoom";

export const router: Router = express.Router();

router.put("/", joinRoom)
router.put("/room", roomDetails)