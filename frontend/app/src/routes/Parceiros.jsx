import { parceiros } from "../constants";
import styles from "../style";

const Parceiros = () => (
  <section id="parceiros" className={`flex flex-col ${styles.paddingY} justify-center items-center bg-primary`}>
    {/* Título e Introdução */}
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 max-w-7xl mx-auto text-center`}>
      {/* Título */}
      <h1 className="font-poppins font-bold ss:text-[60px] text-[48px] text-white ss:leading-[100.8px] leading-[75px] mb-6">
        Nossos Parceiros em Energia Renovável
      </h1>

      {/* Texto sobre os parceiros */}
      <p className={`${styles.paragraph} max-w-[800px] mx-auto mt-4 text-white text-lg leading-relaxed`}>
        Trabalhar em conjunto com parceiros estratégicos é essencial para impulsionar inovações e alcançar 
        soluções sustentáveis. Cada parceria fortalece nossa missão de transformar a realidade do setor de energia 
        renovável.
      </p>
    </div>

    {/* Lista de Parceiros */}
    <div className={`${styles.flexCenter} flex-wrap w-full my-12`}>
      {parceiros.map((client) => (
        <div
          key={client.id}
          className="flex-1 sm:min-w-[200px] min-w-[160px] m-6 p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out"
          style={{
            maxWidth: "300px",
            minHeight: "360px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Cartão do Parceiro */}
          <div className="flex flex-col items-center justify-center text-center">
            {/* Logo do Parceiro */}
            <img
              src={client.logo}
              alt={client.name}
              className="sm:w-[160px] w-[120px] object-contain mb-4"
              style={{ height: "100px", objectFit: "contain" }}
            />

            {/* Nome do Parceiro */}
            <h3 className="font-poppins text-xl font-semibold text-[#2563eb] mb-2">{client.name}</h3>

            {/* Descrição curta */}
            <p
              className="font-poppins text-sm text-gray-600 mb-4"
              style={{
                minHeight: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {client.description ||
                "Referência global em energias limpas e soluções tecnológicas avançadas para o futuro."}
            </p>
          </div>

          {/* Link para mais informações */}
          <a
            href={client.website || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="font-poppins text-sm text-[#2563eb] hover:underline"
          >
            Saiba mais
          </a>
        </div>
      ))}
    </div>

    {/* Textos em Forma de Cascata */}
    <div className="flex flex-col items-center space-y-4 mt-12 px-4">
      <p className="text-white font-poppins text-lg bg-transparent border-l-4 border-[#2563eb] pl-4">
        Parceiros estratégicos impulsionam nosso impacto no setor de energias renováveis.
      </p>
      <p className="text-white font-poppins text-lg bg-transparent border-l-4 border-[#1e40af] pl-4">
        Juntos, estamos construindo soluções que respeitam o meio ambiente.
      </p>
      <p className="text-white font-poppins text-lg bg-transparent border-l-4 border-[#2563eb] pl-4">
        Colaborações globais fortalecem nossa missão por um futuro sustentável.
      </p>
      <p className="text-white font-poppins text-lg bg-transparent border-l-4 border-[#1e40af] pl-4">
        Cada parceria é um passo em direção a um planeta mais verde.
      </p>
    </div>
  </section>
);

export default Parceiros;
