import { url } from "./api";

type ServerResponse = {
  _id: string;
  __v: number;
  roomOptions: {
    newTasks: boolean;
    editTask: boolean;
    editPermissions: boolean;
    _id: string;
  };
  roomUsers: {
    username: string;
    isAdmin: boolean;
    _id: string;
  }[];
  tasks: {
    active:
      | {
          description: string;
          isActive: boolean;
          isBin: boolean;
          comments: {
            author: string;
            text: string;
            _id: string;
          }[];
          _id: string;
        }[]
      | [];
    completed:
      | {
          description: string;
          isActive: boolean;
          isBin: boolean;
          comments: {
            author: string;
            text: string;
            _id: string;
          }[];
          _id: string;
        }[]
      | [];
    bin:
      | {
          description: string;
          isActive: boolean;
          isBin: boolean;
          comments: {
            author: string;
            text: string;
            _id: string;
          }[];
          _id: string;
        }[]
      | [];
    _id: string;
  };
};

export const getRoomDetails = async (roomId: string | undefined, username: string | null) => {
  try {
    const req = await fetch(`${url}/api/join/room`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `id=${roomId}&clientUsername=${username}`,
    });

    if (!req.ok) {
      throw new Error(`${req.statusText}`);
    }

    const res: ServerResponse = await req.json();

    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};
