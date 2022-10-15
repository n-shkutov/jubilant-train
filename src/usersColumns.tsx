import { IUser } from "./types";
import { createColumnHelper } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";

type TableUser = Pick<IUser, "id" | "name" | "username" | "address" | "email">;

const columnHelper = createColumnHelper<TableUser>();

export const usersColumns = [
  columnHelper.accessor("id", {
    header: "Id",
    cell: (props) => props.getValue(),
  }),
  columnHelper.accessor("name", {
    header: "Name",
    cell: (props) => props.getValue(),
  }),
  columnHelper.accessor("username", {
    header: "Username",
    cell: (props) => props.getValue(),
  }),
  columnHelper.accessor("email", {
    header: "Email",
    cell: (props) => props.getValue(),
  }),
  columnHelper.accessor("address", {
    header: "City",
    cell: (props) => props.getValue().city,
  }),
  columnHelper.display({
    header: "Edit",
    cell: (props) => (
      <button
        type="button"
        className="min-w-[10ch] focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-yellow-900"
        onClick={() => {
          console.log(`Edit user with id ${props.row.original.id}`);
        }}
      >
        Edit
      </button>
    ),
  }),
  columnHelper.display({
    header: "Delete",
    cell: (props) => {
      const navigate = useNavigate();
      return (
        <button
          type="button"
          onClick={() => navigate(`user/delete/${props.row.original.id}`)}
          className="min-w-[10ch] focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Delete
        </button>
      );
    },
  }),
];
