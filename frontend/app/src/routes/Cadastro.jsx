import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Adicione esta linha

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate(); // Crie a instância de navegação

  const handleCadastro = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/cadastro",
        JSON.stringify({ name, email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setSuccess("Cadastro realizado com sucesso!");
      setError("");

      // Após o cadastro bem-sucedido, redirecione para a página de login
      setTimeout(() => {
        navigate("/login"); // Redireciona para a página de login
      }, 2000); // Redireciona após 2 segundos, você pode ajustar o tempo
    } catch (error) {
      setError("Erro ao realizar o cadastro");
    }
  };

  return (
<section className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
  <div className="bg-gray-800 shadow-2xl rounded-lg p-8 w-full max-w-3xl flex flex-col lg:flex-row items-center">
    {/* Texto Motivacional */}
    <div className="lg:w-1/2 p-6 text-center lg:text-left">
      <h1 className="text-4xl font-bold text-blue-400 mb-4">
        Seja bem-vindo à nossa comunidade!
      </h1>
      <p className="text-gray-300 text-lg mb-6">
        Ao se cadastrar, você terá acesso a uma plataforma exclusiva cheia de vantagens e funcionalidades personalizadas.
        <span className="block mt-2 font-semibold text-blue-400">
          Não perca tempo, sua jornada começa agora!
        </span>
      </p>
      <p className="text-gray-400 text-sm">
        Junte-se a outros usuários e aproveite ao máximo as ferramentas disponíveis para transformar sua experiência.
      </p>
    </div>

    {/* Formulário de Cadastro */}
    <div className="lg:w-1/2 bg-gray-700 shadow-lg rounded-lg p-8">
      <h2 className="text-3xl font-extrabold text-center text-blue-400 mb-6">
        Cadastro
      </h2>
      <form className="space-y-6" onSubmit={handleCadastro}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          required
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Cadastrar
        </button>
      </form>
      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      {success && <p className="mt-4 text-green-500 text-center">{success}</p>}
      <p className="mt-4 text-center text-gray-400">
        Já tem uma conta?{" "}
        <a
          href="/login"
          className="text-blue-400 hover:underline transition"
        >
          Faça login
        </a>
      </p>
    </div>
  </div>
</section>


  );
};

export default Cadastro;
