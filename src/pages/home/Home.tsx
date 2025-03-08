import React, { useState } from "react";
import fetchPersona from "../../services/api/personaApi";
import PersonaCard from "../../components/personaCard";

const Home: React.FC = () => {
  const [filters, setFilters] = useState({
    age: "",
    gender: "",
    origin: "",
    profession: ""
  });

  const [persona, setPersona] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const getPersona = async () => {
    if (!apiKey) return alert("Insira sua API Key!");
    
    setLoading(true);
    const data = await fetchPersona(apiKey, filters);
    setPersona(data);
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 p-8">
      {/* Coluna Esquerda - Formulário */}
      <div className="w-1/2 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Filtros</h2>

        <input 
          type="text" 
          name="apiKey"
          placeholder="Insira sua API Key" 
          value={apiKey} 
          onChange={(e) => setApiKey(e.target.value)}
          className="w-full p-2 border rounded-md mb-4"
        />

        <label className="block text-gray-700">Idade</label>
        <input 
          type="number" 
          name="age" 
          value={filters.age} 
          onChange={handleChange} 
          placeholder="Ex: 25" 
          className="w-full p-2 border rounded-md mb-4"
        />

        <label className="block text-gray-700">Gênero</label>
        <select name="gender" value={filters.gender} onChange={handleChange} className="w-full p-2 border rounded-md mb-4">
          <option value="">Selecione</option>
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
        </select>

        <label className="block text-gray-700">Origem</label>
        <input 
          type="text" 
          name="origin" 
          value={filters.origin} 
          onChange={handleChange} 
          placeholder="Ex: Brazil" 
          className="w-full p-2 border rounded-md mb-4"
        />

        <label className="block text-gray-700">Profissão</label>
        <input 
          type="text" 
          name="profession" 
          value={filters.profession} 
          onChange={handleChange} 
          placeholder="Ex: Software Engineer" 
          className="w-full p-2 border rounded-md mb-6"
        />

        <button 
          onClick={getPersona} 
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Gerando..." : "Gerar Persona"}
        </button>
      </div>

      {/* Coluna Direita - Documento da Persona */}
      <div className="w-1/2 flex items-center justify-center">
        {persona ? <PersonaCard persona={persona} /> : <p className="text-gray-500">Nenhuma persona gerada ainda.</p>}
      </div>
    </div>
  );
};

export default Home;
