import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";

// Registrando os componentes do gráfico
ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

const Calculo = () => {
  const [monthlyExpenses, setMonthlyExpenses] = useState(
    JSON.parse(localStorage.getItem("monthlyExpenses")) || {
      janeiro: "",
      fevereiro: "",
      marco: "",
      abril: "",
      maio: "",
      junho: "",
      julho: "",
      agosto: "",
      setembro: "",
      outubro: "",
      novembro: "",
      dezembro: "",
    }
  );
  const [applianceConsumptions, setApplianceConsumptions] = useState(
    JSON.parse(localStorage.getItem("applianceConsumptions")) || {}
  );
  const [totalExpense, setTotalExpense] = useState(0);
  const [renewableExpense, setRenewableExpense] = useState(0);
  const [kwhPrice, setKwhPrice] = useState(0.60); // Preço por kWh em R$
  const [newAppliance, setNewAppliance] = useState({ name: "", consumption: "" });
  const [editAppliance, setEditAppliance] = useState(null);

  // Função para tratar o input do usuário
  const handleChange = (month, value) => {
    const updatedExpenses = {
      ...monthlyExpenses,
      [month]: value,
    };
    setMonthlyExpenses(updatedExpenses);
    localStorage.setItem("monthlyExpenses", JSON.stringify(updatedExpenses));
  };

  const handleApplianceChange = (appliance, value) => {
    const updatedConsumptions = {
      ...applianceConsumptions,
      [appliance]: value,
    };
    setApplianceConsumptions(updatedConsumptions);
    localStorage.setItem("applianceConsumptions", JSON.stringify(updatedConsumptions));
  };

  const handleNewApplianceChange = (e) => {
    const { name, value } = e.target;
    setNewAppliance({
      ...newAppliance,
      [name]: value,
    });
  };

  // Função para adicionar um novo eletrodoméstico
  const addAppliance = () => {
    if (newAppliance.name && newAppliance.consumption) {
      const updatedConsumptions = { ...applianceConsumptions, [newAppliance.name]: newAppliance.consumption };
      setApplianceConsumptions(updatedConsumptions);
      localStorage.setItem("applianceConsumptions", JSON.stringify(updatedConsumptions));
      setNewAppliance({ name: "", consumption: "" });
    }
  };

  // Função para remover um eletrodoméstico
  const removeAppliance = (applianceName) => {
    const updatedConsumptions = { ...applianceConsumptions };
    delete updatedConsumptions[applianceName];
    setApplianceConsumptions(updatedConsumptions);
    localStorage.setItem("applianceConsumptions", JSON.stringify(updatedConsumptions));
  };
  
  // Função para editar um eletrodoméstico
  const editApplianceData = (appliance) => {
    setNewAppliance({ name: appliance, consumption: applianceConsumptions[appliance] });
    setEditAppliance(appliance); // Marca como sendo editado
  };



  const updateAppliance = () => {
    if (editAppliance && newAppliance.name && newAppliance.consumption) {
      const updatedConsumptions = { ...applianceConsumptions, [editAppliance]: newAppliance.consumption };
      setApplianceConsumptions(updatedConsumptions);
      localStorage.setItem("applianceConsumptions", JSON.stringify(updatedConsumptions));
      setNewAppliance({ name: "", consumption: "" });
      setEditAppliance(null); // Reseta a edição
    }
  };

  // Função para calcular o total gasto até o momento
  const calculateTotalExpense = () => {
    const total = Object.values(monthlyExpenses)
      .filter((expense) => expense !== "") // Filtra os meses com valor
      .reduce((acc, current) => acc + parseFloat(current), 0);
    setTotalExpense(total);

    // Calculando o gasto com energia renovável (considerando 30% de economia)
    const renewableTotal = total * 0.7; // Desconto de 30%
    setRenewableExpense(renewableTotal);
  };

  // Função para calcular o custo de cada eletrodoméstico
  const calculateApplianceCosts = () => {
    let totalApplianceCost = 0;
    Object.keys(applianceConsumptions).forEach((appliance) => {
      const consumption = parseFloat(applianceConsumptions[appliance]) || 0;
      const cost = consumption * kwhPrice;
      totalApplianceCost += cost;
    });
    return totalApplianceCost;
  };

  // Preparando os dados para o gráfico
  const chartData = {
    labels: Object.keys(monthlyExpenses),
    datasets: [
      {
        label: "Gasto Mensal (R$)",
        data: Object.values(monthlyExpenses).map((expense) => parseFloat(expense) || 0),
        borderColor: "#4D9BDF", // Cor da linha
        backgroundColor: "rgba(77, 155, 223, 0.2)", // Cor de fundo da linha
        fill: true, // Preenche o gráfico
        tension: 0.4, // Curvatura da linha
      },
    ],
  };

  // Função para reiniciar a consulta e limpar os dados
  const restartConsultation = () => {
    setMonthlyExpenses({
      janeiro: "",
      fevereiro: "",
      marco: "",
      abril: "",
      maio: "",
      junho: "",
      julho: "",
      agosto: "",
      setembro: "",
      outubro: "",
      novembro: "",
      dezembro: "",
    });
    setTotalExpense(0);
    setRenewableExpense(0);
    localStorage.removeItem("monthlyExpenses");
    localStorage.removeItem("applianceConsumptions");
  };

  return (
    <div className="flex flex-col items-center my-10 bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-xl shadow-xl w-full max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold text-white mb-6">Calcule seu Gasto Anual com Energia</h1>

      {/* Formulário para entrada de dados de energia mensal */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 mb-8">
        {Object.keys(monthlyExpenses).map((month, index) => (
          <div key={index} className="flex flex-col">
            <label htmlFor={month} className="text-white text-lg font-medium mb-2">{month.charAt(0).toUpperCase() + month.slice(1)}</label>
            <input
              id={month}
              type="number"
              value={monthlyExpenses[month]}
              onChange={(e) => handleChange(month, e.target.value)}
              placeholder="R$ 0,00"
              className="mt-2 p-3 border-2 border-transparent rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 bg-gray-300 text-black"
            />
          </div>
        ))}
      </div>

      {/* Botão para calcular */}
      <button
        onClick={calculateTotalExpense}
        className="py-3 px-6 bg-blue-600 text-white text-lg rounded-full shadow-lg hover:bg-blue-700 transition-all ease-in-out duration-200"
      >
        Calcular Total
      </button>

      {/* Exibe o gráfico */}
      <div className="mt-10 w-full max-w-3xl">
        <Line data={chartData} />
      </div>

      {/* Exibe o total anual até o momento */}
      {totalExpense > 0 && (
        <div className="mt-8 text-lg text-white">
          <p><strong>Total gasto até agora (R$):</strong> {totalExpense.toFixed(2)}</p>
          <p><strong>Total que gastaria caso optasse por alguma energia renovável (R$):</strong> {renewableExpense.toFixed(2)}</p>
        </div>
      )}

      {/* Botão para reiniciar a consulta */}
      <button
        onClick={restartConsultation}
        className="mt-6 py-3 px-6 bg-gray-600 text-white text-lg rounded-full shadow-lg hover:bg-gray-900 transition-all ease-in-out duration-200"
      >
        Nova Consulta
      </button>

      {/* Formulário para entrada de dados de consumo dos eletrodomésticos */}
      <div className="mt-8 text-white w-full max-w-3xl">
        <h2 className="text-xl font-semibold mb-4">Adicionar Eletrodoméstico</h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={newAppliance.name}
            onChange={handleNewApplianceChange}
            placeholder="Nome do Eletrodoméstico"
            className="p-3 mb-2 border-2 border-transparent rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 text-black"
          />
          <input
            type="number"
            name="consumption"
            value={newAppliance.consumption}
            onChange={handleNewApplianceChange}
            placeholder="Consumo (kWh)"
            className="p-3 mb-2 border-2 border-transparent rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 text-black"
          />
          <button
            onClick={editAppliance ? updateAppliance : addAppliance}
            className="py-3 px-6 bg-gray-600 text-white text-lg rounded-full shadow-lg hover:bg-gray-900 transition-all ease-in-out duration-200"
          >
            {editAppliance ? 'Atualizar Eletrodoméstico' : 'Adicionar Eletrodoméstico'}
          </button>
        </div>
      </div>

      {/* Tabela de Eletrodomésticos */}
      {Object.keys(applianceConsumptions).length > 0 && (
        <div className="mt-6">
          <table className="min-w-full bg-gray-800 rounded-xl text-white">
            <thead>
              <tr>
                <th className="py-2 px-4 text-left">Eletrodoméstico</th>
                <th className="py-2 px-4 text-left">Consumo (kWh)</th>
                <th className="py-2 px-4 text-left">Custo (R$)</th>
                <th className="py-2 px-4 text-left">Ação</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(applianceConsumptions).map(([appliance, consumption], index) => {
                const cost = (parseFloat(consumption) * kwhPrice).toFixed(2);
                return (
                  <tr key={index}>
                    <td className="py-2 px-4">{appliance}</td>
                    <td className="py-2 px-4">{consumption} kWh</td>
                    <td className="py-2 px-4">{cost} R$</td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() => removeAppliance(appliance)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Remover
                      </button>
                      <button
                        onClick={() => editApplianceData(appliance)}
                        className="ml-4 text-yellow-400 hover:text-yellow-600"
                      >
                        Editar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p className="mt-4 text-white">Gasto Total com Eletrodomésticos: R$ {calculateApplianceCosts().toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default Calculo;
