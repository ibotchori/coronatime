import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UseLogOut = () => {
  const navigate = useNavigate();
  const logOutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/");
  };

  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => {
    setShowModal((showModal) => !showModal);
  };

  return { showModal, logOutHandler, showModalHandler };
};

export default UseLogOut;
