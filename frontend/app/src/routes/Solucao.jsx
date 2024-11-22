import { apple, bill, google, card } from "../assets";
import styles, { layout } from "../style";

const Solucao = () => (
  <>
    {/* Primeira Seção */}
    <section
      id="product"
      className={`${layout.sectionReverse} flex justify-center items-center`}
    >
      <div className={`${layout.sectionImgReverse} relative`}>
        <img
          src={bill}
          alt="monitoramento de energia"
          className="w-[80%] h-[100%] relative z-[5]"
        />
        {/* Gradiente superior */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        {/* Gradiente inferior */}
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      </div>

      {/* Informações principais */}
      <div className={`${layout.sectionInfo} text-center max-w-7xl mx-auto`}>
        <h2 className={`font-bold text-white ${styles.heading2}`}>
          Monitore e otimize <br className="sm:block hidden" /> o consumo de energia
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 mx-auto`}>
          Nossa solução oferece uma plataforma inovadora que permite monitorar o consumo de energia em tempo real, fornecendo informações detalhadas sobre seus hábitos de consumo. Utilizamos tecnologia avançada para identificar áreas de desperdício e oferecer dicas personalizadas de economia.
        </p>

      </div>
    </section>

    {/* Nova Seção */}
    <section
      className="flex flex-col sm:flex-row items-center justify-between max-w-5xl mx-auto mt-8 py-6"
    >
      {/* Texto */}
      <div className="text-left max-w-[45%] sm:pr-6">
        <h2 className={`font-bold text-white ${styles.heading2}`}>
          Como saber quanto <br className="sm:block hidden" /> estou gastando em energia?
        </h2>
        <p className={`${styles.paragraph} mb-3 text-sm`}>
          Agora, você pode cadastrar seus eletrodomésticos na plataforma e acompanhar o consumo individual de cada um. Além disso, disponibilizamos uma agenda prática para monitorar o gasto total ao longo dos dias, ajudando a ter uma visão clara dos seus hábitos de consumo.
        </p>
        <p className={`${styles.paragraph} mb-3 text-sm`}>
          Outra funcionalidade exclusiva é a opção de registrar seu gasto mensal estimado. Com isso, você pode saber exatamente quanto está consumindo até o momento, tanto em quilowatts quanto em reais.
        </p>
        <p className={`${styles.paragraph} text-sm`}>
          Seja para residências, pequenos negócios ou qualquer tipo de estabelecimento, nossa solução é ideal para uma gestão de energia mais eficiente e sustentável.
        </p>
      </div>

      {/* Imagem */}
      <div className="max-w-[45%] sm:pl-6">
        <img
          src={card}
          alt="gestão de consumo de energia"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
    <div className="flex flex-row flex-wrap sm:mt-10 mt-6 justify-center">
          <img
            src={apple}
            alt="App Store"
            className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="Google Play"
            className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
          />
        </div>
  </>
);

export default Solucao;
