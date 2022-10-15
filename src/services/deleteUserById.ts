import { client } from "./client";

export const deleteUserById = async (id: string) => {
  const { data } = await client.delete(id);

  return data;
};
