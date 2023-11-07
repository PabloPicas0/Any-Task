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

    const { todo } = await req.json();

    return { todo };
  } catch (error) {
    console.error(error);
  }
};

export default updateTodo;
