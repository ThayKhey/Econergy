import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { discount } from "../assets"; // Imagem de desconto ou algo motivacional
import styles from "../style"; // Estilos reutilizáveis

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setUser(response.data);
      setError("");
      navigate("/calculo");
    } catch (error) {
      if (!error?.response) {
        setError("Erro ao acessar o servidor");
      } else if (error.response.status === 401) {
        setError("Usuário ou senha inválidos");
      } else {
        setError("Erro desconhecido");
      }
    }
  };

  return (
<section className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
  <div className="bg-gray-800 shadow-2xl rounded-lg p-8 w-full max-w-6xl flex flex-row justify-center items-center">
    
    {/* Seção de Login */}
    <div className="bg-gray-900 shadow-lg rounded-lg p-8 w-full max-w-md mr-10">
      {user == null ? (
        <div>
          <h2 className="text-3xl font-extrabold text-center text-blue-400 mb-6">
            Login
          </h2>

          {/* Texto Motivacional */}
          <div className="flex flex-row items-center py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg mb-6">
            <img src={discount} alt="motivacional" className="w-8 h-8" />
            <p className="text-gray-200 ml-2 text-sm">
              Acesse sua conta e aproveite os melhores serviços,{" "}
              <span className="text-white font-semibold">vamos juntos!</span>
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleLogin}>
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
              Login
            </button>
          </form>
          {error && (
            <p className="mt-4 text-red-500 text-center">{error}</p>
          )}
          <p className="mt-4 text-center text-gray-400">
            Não tem uma conta?{" "}
            <Link to="/cadastro" className="text-blue-400 hover:underline">
              Cadastre-se aqui
            </Link>
          </p>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold text-center text-blue-400 mb-6">
            Olá, {user.name}!
          </h2>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      )}
    </div>

    {/* Texto Grande ao Lado do Login */}
    <div className="text-gray-300 max-w-lg flex flex-col justify-center items-start">
      <h1 className="text-4xl font-bold mb-6 text-blue-400">
        Conecte-se agora e explore nossas oportunidades!
      </h1>
      <p className="text-lg mb-4 text-gray-400">
        Faça login para acessar todos os recursos e aproveitar as vantagens exclusivas. A sua jornada começa aqui!
      </p>
      <p className="text-sm text-gray-500">
        Entre para a comunidade e aproveite ao máximo as funcionalidades personalizadas e exclusivas da plataforma.
      </p>
    </div>
  </div>
</section>

  );
};

export default Login;
