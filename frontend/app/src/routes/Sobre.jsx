import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="ícone" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Sobre = () => (
  <section id="features" className={`flex flex-col ${layout.section} justify-center items-center`}>
    <div className={`${layout.sectionInfo} text-center max-w-7xl mx-auto`}>
      <h2 className={styles.heading2}>
        Otimize seu consumo, <br className="sm:block hidden" /> nós cuidamos da tecnologia.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 mx-auto`}>
        Com nossa plataforma de monitoramento energético, você pode tomar decisões conscientes, reduzir custos e
        contribuir para um mundo mais sustentável. Simplifique sua gestão de energia com tecnologia inovadora e
        conteúdos interativos.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex flex-col items-center justify-center`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Sobre;
