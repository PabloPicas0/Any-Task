import { url } from "./api";

const deleteTodo = async (taskId: FormDataEntryValue | null) => {
  try {
    const req = await fetch(`${url}/api/create/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `taskId=${taskId}`,
    });

    if (!req.ok) throw new Error("Something went wrong");
  } catch (error) {
    console.error(error);
  }
};

export default deleteTodo;
