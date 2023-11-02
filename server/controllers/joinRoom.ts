import { Request, Response } from "express";
import mongoose from "mongoose";

export const joinRoom = (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    const isValidId = mongoose.Types.ObjectId.isValid(id);

    if (isValidId) return res.sendStatus(200);

    throw new Error("Invalid Id");
  } catch (error) {
    console.error(error);
    return res.sendStatus(406);
  }
};
