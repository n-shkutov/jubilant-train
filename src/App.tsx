import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const App = () => {
  return (
    <div className="container mx-auto h-screen p-4">
      <h1 className="text-4xl mb-6">Dashboard</h1>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
