import { Request, Response } from "express";
import mongoose from "mongoose";
import roomModel from "../models/Task";

export const joinRoom = async (req: Request, res: Response) => {
  const { id, clientUsername } = req.body;

  try {
    const isValidId = mongoose.Types.ObjectId.isValid(id);

    if (!isValidId) throw new Error("Invalid Id");

    const room = await roomModel.findById(id);

    if (!room) throw new Error("Room not exists");

    const { roomUsers } = room;

    for (const roomUser of roomUsers) {
      const { username } = roomUser;

      if (username === clientUsername) {
        return res.sendStatus(200);
      }
    }

    room.roomUsers.push({ username: clientUsername, isAdmin: false });
    await room.save();

    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    return res.sendStatus(406);
  }
};

export const roomDetails = async (req: Request, res: Response) => {
  const { id, clientUsername } = req.body;

  try {
    const isValidId = mongoose.Types.ObjectId.isValid(id);

    if (!isValidId) return res.sendStatus(400);

    const room = await roomModel.findById(id);

    if (!room) return res.sendStatus(404);

    const { roomUsers } = room;

    const clientExists = roomUsers.find((user) => user.username === clientUsername);

    if (!clientExists) return res.sendStatus(401);

    room.roomUsers = [clientExists];

    return res.status(200).json(room);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};
