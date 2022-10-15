import { client } from "./client";
import { ICreateUser } from "../types";

export const createNewUser = async (newUser: ICreateUser) => {
  const { data } = await client.post("", newUser);

  return data;
};
