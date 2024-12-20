import styles from "../style";
import { arrowUp } from "../assets";
import { useNavigate } from "react-router-dom";

const Comecar = () => {
  const navigate = useNavigate(); // Hook para navegação

  const handleNavigate = () => {
    navigate("/login"); // Redireciona para a página Calculo
  };

  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
      onClick={handleNavigate} // Adiciona o evento de clique
    >
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Comece</span>
          </p>
          <img src={arrowUp} alt="seta-para-cima" className="w-[23px] h-[23px] object-contain" />
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Agora</span>
        </p>
      </div>
    </div>
  );
};

export default Comecar;
