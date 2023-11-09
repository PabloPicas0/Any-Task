import mongoose from "mongoose";

interface IRoom {
  roomUsers: {
    username: string;
    isAdmin: boolean;
  }[];
  roomOptions: {
    newTasks: boolean;
    editTask: boolean;
    editPermissions: boolean;
  };
  tasks: {
    active:
      | {
          description: string;
          isActive: boolean;
          isBin: boolean;
          _id: mongoose.Types.ObjectId;
          comments: {
            author: string;
            text: string;
          }[];
        }[];
    completed:
      | {
          description: string;
          isActive: boolean;
          isBin: boolean;
          _id: mongoose.Types.ObjectId;
          comments: {
            author: string;
            text: string;
          }[];
        }[];
    bin:
      | {
          description: string;
          isActive: boolean;
          isBin: boolean;
          _id: mongoose.Types.ObjectId;
          comments: {
            author: string;
            text: string;
          }[];
        }[];
  };
}

const roomSchema = new mongoose.Schema<IRoom>({
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
