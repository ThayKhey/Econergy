import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ styles }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/login"); // Redireciona para a página Calculo
  };

  return (
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[100px] outline-none ${styles} ml-auto mt-100 mb-100`}
      onClick={handleNavigate} // Redireciona ao clicar
    >
      Saber mais
    </button>
  );
};

export default Button;
