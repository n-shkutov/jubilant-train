import { useQuery } from "@tanstack/react-query";
import Table from "../components/Table";
import { usersColumns } from "../usersColumns";
import { getAllUsers } from "../services/getAllUsers";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const usersQuery = useQuery(["users"], getAllUsers, {
    initialData: [],
  });

  const addNewHandler = () => {
    navigate("/user/new");
  };

  return (
    <div>
      <div className="flex justify-between py-2">
        <h2 className="text-2xl">User list</h2>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={addNewHandler}
        >
          Add new
        </button>
      </div>
      <Table data={usersQuery.data} columns={usersColumns} />
    </div>
  );
};

export default Dashboard;
