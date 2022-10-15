import { createBrowserRouter } from "react-router-dom";

import Dashboard from "./routes/Dashboard";
import NewUser from "./routes/NewUser";
import EditUser from "./routes/EditUser";
import User from "./routes/User";
import DeleteUserModal from "./components/DeleteUserModal";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "user",
    element: <User />,
    children: [
      {
        path: "new",
        element: <NewUser />,
      },
      {
        path: "edit/:id",
        element: <EditUser />,
      },
      {
        path: "delete/:id",
        element: (
          <>
            <Dashboard />
            <DeleteUserModal />
          </>
        ),
      },
    ],
  },
]);
