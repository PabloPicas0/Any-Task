import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  roomUsers: {
    type: [
      {
        username: String,
        isAdmin: Boolean,
      },
    ],
    required: true,
  },
  roomOptions: {
    type: {
      newTasks: Boolean,
      editTask: Boolean,
      editPermissions: Boolean,
    },
  },
  tasks: {
    type: {
      active: [
        {
          description: String,
          isActive: Boolean,
          isBin: Boolean,
          comments: {
            type: [
              {
                author: String,
                text: String,
              },
            ],
            default: [],
          },
        },
      ],
      completed: [
        {
          description: String,
          isActive: Boolean,
          isBin: Boolean,
          comments: {
            type: [
              {
                author: String,
                text: String,
              },
            ],
            default: [],
          },
        },
      ],
      bin: [
        {
          description: String,
          isActive: Boolean,
          isBin: Boolean,
          comments: {
            type: [
              {
                author: String,
                text: String,
              },
            ],
            default: [],
          },
        },
      ],
    },
    default: {
      active: [],
      completed: [],
      bin: [],
    },
  },
});

const roomModel = mongoose.model("roomModel", roomSchema);

export default roomModel;
