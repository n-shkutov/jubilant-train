import axios from "axios";

export const client = axios.create({
  baseURL: "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data"
})
