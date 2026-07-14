import { SubmitEvent, useState } from "react";

export const useModal = () => {
  const [openModal, setOpenModal] = useState(false);

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    console.log(Object.fromEntries(data));
    onClose();
  }

  function onClose() {
    setOpenModal(false);
  }
  function onNewClient() {
    setOpenModal(true);
  }

  return {
    handleSubmit,
    onClose,
    open: openModal,
    onNewClient,
  };
};
