import { url } from "./api";

const addCommnet = async (formData: FormData, username: string | null) => {
  const taskId = formData.get("taskId");
  const commnet = formData.get("commnet");

  try {
    const req = await fetch(`${url}/api/create/commnet`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `todoId=${taskId}&commnet=${commnet}&username=${username}`,
    });

    console.log(req);
  } catch (error) {
    console.error(error);
  }
};

export default addCommnet;
