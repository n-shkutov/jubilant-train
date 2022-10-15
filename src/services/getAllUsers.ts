import { IUser } from "../types";
import { client } from "./client";

export const getAllUsers = async (): Promise<IUser[]> => {
  const { data } = await client.get("");

  return data;
};
