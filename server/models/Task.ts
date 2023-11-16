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
  lastCleared: number;
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
  lastCleared: {
    type: Number,
    default: new Date().getTime(),
  },
});

roomSchema.post("findOne", (doc: IRoom) => {
  const lastClear = new Date(doc.lastCleared).getMonth();
  const nextClear = new Date();
  const currentMonth = new Date();

  nextClear.setMonth(lastClear + 1);

  if (currentMonth.getMonth() === nextClear.getMonth()) {
    doc.tasks.bin = [];
    doc.lastCleared = currentMonth.getTime();
  }
  console.log(lastClear, nextClear.getMonth(), currentMonth.getMonth());
}); 

const roomModel = mongoose.model("roomModel", roomSchema);

export default roomModel;
