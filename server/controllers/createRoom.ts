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

type TodoCommnet = {
  author: string;
  text: string;
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
      "tasks.active": {
        $elemMatch: {
          _id: taskId,
        },
      },
    });

    if (!room) return res.sendStatus(404);

    const { active } = room.tasks;

    for (let i = 0; i < active.length; ++i) {
      const { _id } = active[i];

      if (_id.toString() === taskId) {
        console.log(`Task Found ${_id.toString()}`);
        const deletedTodo = room.tasks.active.splice(i, 1)[0];

        deletedTodo.isActive = false;
        deletedTodo.isBin = true;

        room.tasks.bin.push(deletedTodo);
        break;
      }
    }

    await room.save();

    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};

export const completeTask = async (req: Request, res: Response) => {
  const { todoId, isActive } = req.body;
  const isActiveTask: boolean = JSON.parse(isActive);

  try {
    const room = await roomModel.findOne({
      $or: [
        {
          "tasks.active": {
            $elemMatch: {
              _id: todoId,
            },
          },
        },
        {
          "tasks.completed": {
            $elemMatch: {
              _id: todoId,
            },
          },
        },
      ],
    });

    if (!room) return res.sendStatus(404);

    const tasksToSwap = room.tasks[isActiveTask ? "active" : "completed"];

    for (let i = 0; i < tasksToSwap.length; ++i) {
      const { _id } = tasksToSwap[i];

      if (_id.toString() === todoId) {
        console.log(`Task Found ${_id.toString()}`);
        const deletedTask = room.tasks[isActiveTask ? "active" : "completed"].splice(i, 1)[0];

        deletedTask.isActive = !isActiveTask;

        room.tasks[isActiveTask ? "completed" : "active"].push(deletedTask);
        break;
      }
    }

    await room.save();

    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
};

export const createComment = async (req: Request, res: Response) => {
  const { todoId, commnet, username } = req.body;
  const todoCommnet: TodoCommnet = {
    author: username,
    text: commnet,
  };

  try {
    const room = await roomModel.findOne({
      "tasks.active": {
        $elemMatch: {
          _id: todoId,
        },
      },
    });

    if (!room) return res.sendStatus(404);

    for (const task of room.tasks.active) {
      const { _id } = task;

      if (_id.toString() === todoId) {
        console.log("task found " + _id.toString());
        task.comments.push(todoCommnet);
        break;
      }
    }

    await room.save();

    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
};
