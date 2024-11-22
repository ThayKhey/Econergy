import { discount, robot } from "../assets";
import styles from "../style";
import Comecar from "./Comecar";
import Sobre from "./Sobre";


const Home = () => {
  return (
    <section id="home" className={`flex flex-col ${styles.paddingY} justify-center items-center`}>

      {/* Seção principal da Home */}
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 max-w-7xl mx-auto`}>

        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="desconto" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> de Desconto a {" "}
            <span className="text-white">cada economia de energia</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            A Próxima <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Geração Sustentável</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <Comecar />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Métodos de Economizar a sua energia
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Nossa equipe de especialistas usa metodologias inovadoras para identificar as melhores formas de economizar sua energia
          que atendem às suas necessidades. Analisamos a eficiência energética, os custos, economia e os benefícios ambientais.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="energia renovável" className="w-[60%] h-[85%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <Comecar />
      </div>

      {/* Seção Sobre */}
      <Sobre />
    </section>
  );
};

export default Home;
