import { Request, Response } from "express";

import roomModel from "../models/Task";

const createRoom = async (req: Request, res: Response) => {
  const { username, allowNewTasks, editTasks, editPermissions } = req.body;

  try {
    const room = new roomModel({
      roomUsers: [
        {
          username: username,
          isAdmin: true,
        },
      ],
      roomOptions: {
        newTasks: allowNewTasks,
        editTask: editTasks,
        editPermissions: editPermissions,
      },
    });

    await room.save();

    return res.status(200).json({
      roomId: room.id,
    });
  } catch (error) {
    console.log(error);
  }
};

export default createRoom;
