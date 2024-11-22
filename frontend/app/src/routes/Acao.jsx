import { useState } from "react";
import styles from "../style";
import Button from "./Button";

const Acao = () => {
  const [energyType, setEnergyType] = useState("");
  const [currentCost, setCurrentCost] = useState("");
  const [simulatedCost, setSimulatedCost] = useState(null);

  const handleSimulation = () => {
    const reductionRate = 0.1; // 10% de redução no consumo
    if (currentCost && energyType) {
      const newCost = currentCost - currentCost * reductionRate;
      setSimulatedCost(newCost.toFixed(2));
    } else {
      alert("Por favor, preencha todos os campos antes de simular.");
    }
  };

  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      {/* Seção Esquerda */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <h2 className={`${styles.heading2} text-center`}>
          Experimente nosso serviço agora!
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center`}>
          Tudo o que você precisa para monitorar o consumo de energia e otimizar seus
          recursos em qualquer lugar.
        </p>

        {/* Calculadora Interativa */}
        <div className="w-full max-w-[470px] mt-10 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Simulação de Economia
          </h3>

          {/* Tipo de Energia */}
          <div className="mb-4">
            <label
              htmlFor="energyType"
              className="block text-sm font-medium text-gray-700"
            >
              Tipo de Energia Utilizada
            </label>
            <select
              id="energyType"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={energyType}
              onChange={(e) => setEnergyType(e.target.value)}
            >
              <option value="">Selecione</option>
              <option value="solar">Solar</option>
              <option value="eolica">Eólica</option>
              <option value="hidreletrica">Hidrelétrica</option>
              <option value="convencional">Convencional</option>
            </select>
          </div>

          {/* Custo Atual */}
          <div className="mb-4">
            <label
              htmlFor="currentCost"
              className="block text-sm font-medium text-gray-700"
            >
              Custo Atual (em R$)
            </label>
            <input
              id="currentCost"
              type="number"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Ex.: 500"
              value={currentCost}
              onChange={(e) => setCurrentCost(Number(e.target.value))}
            />
          </div>

          {/* Botão de Simulação */}
          <button
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={handleSimulation}
          >
            Simular Economia
          </button>

          {/* Resultado da Simulação */}
          {simulatedCost !== null && (
            <div className="mt-6 text-center">
              <p className="text-lg font-medium text-gray-700">
                Custo após economia:{" "}
                <span className="text-indigo-600">R$ {simulatedCost}</span>
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Botão Secundário */}
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  );
};

export default Acao;
