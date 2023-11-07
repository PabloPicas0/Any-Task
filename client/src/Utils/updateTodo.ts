import { url } from "./api";

const updateTodo = async (roomId: string, newTodo: FormDataEntryValue) => {
  try {
    const req = await fetch(`${url}/api/create/task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `roomId=${roomId}&taskDescription=${newTodo}&isActive=true&isBin=false`,
    });

    if (!req.ok) throw new Error("Something went wrong");
  } catch (error) {
    console.error(error);
  }
};

export default updateTodo;
