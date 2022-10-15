import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewUser } from "../services/createNewUser";

const newUserSchema = object({
  name: string().required(),
  email: string().email().required(),
});

const NewUser = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(newUserSchema),
  });

  const mutation = useMutation(createNewUser, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(["users"]);
      goHome();
    },
  });

  const goHome = () => {
    navigate("/");
  };

  const onSubmit = (data: any): void => {
    mutation.mutate(data);
  };

  return (
    <div>
      <h2 className="mb-4 text-2xl">Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your name"
            {...register("name")}
          />
          {errors.name != null && (
            <p className="mt-2 text-xs text-red-600">
              {errors.name.message as string}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@flowbite.com"
            {...register("email")}
          />
          {errors.email != null && (
            <p className="mt-2 text-xs text-red-600">
              {errors.email.message as string}
            </p>
          )}
        </div>

        <div className="flex flex-row-reverse gap-2">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
          <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            onClick={goHome}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
