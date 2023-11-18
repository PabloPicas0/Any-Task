import { url } from "./api";

const editPermissions = async (formData: FormData) => {
  const editPermissions = formData.get("editPermissions");
  const editTask = formData.get("editTask");
  const newTasks = formData.get("newTasks");
  const roomId = formData.get("roomId");

  try {
    const req = await fetch(`${url}/api/create/permission`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `editPermissions=${editPermissions}&editTask=${editTask}&newTasks=${newTasks}&roomId=${roomId}`,
    });

    if (!req.ok) throw new Error("Something went wrong");
  } catch (error) {
    console.error(error);
  }
};

export default editPermissions;
