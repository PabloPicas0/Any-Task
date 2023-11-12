import { url } from "./api";

const completeTodo = async (todoId: FormDataEntryValue | null, isActive: FormDataEntryValue | null) => {
  try {
    // console.log(isActive);
    const req = await fetch(`${url}/api/create/task`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `todoId=${todoId}&isActive=${isActive}`,
    });

    // console.log(req);

    if (!req.ok) throw new Error("Something went wrong");
  } catch (error) {
    console.error(error);
  }
};

export default completeTodo;
