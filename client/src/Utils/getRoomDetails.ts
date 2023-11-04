import { url } from "./api";

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

    const res = await req.json();

    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};
