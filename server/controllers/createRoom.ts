import { Request, Response } from "express";
import mongoose from "mongoose";

import roomModel from "../models/Task";

type TODO = {
  description: string;
  isActive: boolean;
  isBin: boolean;
  _id: mongoose.Types.ObjectId;
  comments: [];
};

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

    if (!room) return res.sendStatus(404);

    const todo: TODO = {
      description: taskDescription,
      isActive: JSON.parse(isActive),
      isBin: JSON.parse(isBin),
      _id: new mongoose.Types.ObjectId(),
      comments: [],
    };

    room.tasks.active.push(todo);

    await room.save();

    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const { taskId } = req.body;

  try {
    const room = await roomModel.findOne({
      "tasks.active": { $elemMatch: { _id: taskId } },
    });

    if (!room) return res.sendStatus(404);

    const { active, bin } = room.tasks;

    for (let i = 0; i < active.length; ++i) {
      const { _id } = active[i];

      if (_id.toString() === taskId) {
        console.log(`Task Found ${_id.toString()}`);
        const deletedTodo = room.tasks.active.splice(i, 1);
        room.tasks.bin = [...bin, ...deletedTodo];
      }
    }
    
    await room.save();

    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};
