import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Solucao, Sobre, Cadastro, Depoimentos, Parceiros, Acao, Footer, Navbar, Dados, Home, Calculo, Login } from "./components";
import styles from "./style";

const App = () => (
  <Router>
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Rotas configuradas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dados" element={<Dados />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/solucao" element={<Solucao />} />
        <Route path="/depoimentos" element={<Depoimentos />} />
        <Route path="/parceiros" element={<Parceiros />} />
        <Route path="/acao" element={<Acao />} />
        <Route path="/calculo" element={<Calculo />} /> 
        <Route path="/login" element={<Login />} />   
      </Routes>

      {/* Footer presente em todas as páginas */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  </Router>
);

export default App;
