import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Depoimentos = () => (
  <section id="parceiros" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    {/* Centralizando o título e o parágrafo */}
    <div className="w-full flex justify-center items-center flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={`${styles.heading2} text-center`}>
        O que as pessoas estão <br className="sm:block hidden" /> dizendo sobre a nossa solução sustentável
      </h2>

      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-center max-w-[450px] mx-auto`}>
          Estamos revolucionando o mercado de energia renovável e ajudando empresas a adotar soluções mais verdes e econômicas.
        </p>
      </div>
    </div>

    {/* Centralizando os cards de feedback */}
    <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Depoimentos;
