import { Request, Response } from "express";

import roomModel from "../models/Task";

export const createRoom = async (req: Request, res: Response) => {
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
    return res.status(500);
  }
};

export const createTask = async (req: Request, res: Response) => {
  const { roomId, taskDescription, isActive, isBin } = req.body;

  try {
    const room = await roomModel.findById(roomId);

    const todo = {
      description: taskDescription,
      isActive: isActive,
      isBin: isBin,
      comments: []
    };

    room?.tasks.active.push(todo)

    await room?.save()

    return res.sendStatus(200)
  } catch (error) {
    console.error(error);
  }
};
