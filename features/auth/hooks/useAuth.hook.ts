import { SubmitEvent } from "react";

export const useAuth = () => {
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    console.log({
      email: form.get("email"),
      password: form.get("password"),
    });
  };
  return {
    handleSubmit,
  };
};
