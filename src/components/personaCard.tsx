import Persona from "../types/personaType";

const PersonaCard: React.FC<{ persona: Persona }> = ({ persona }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-96 border border-gray-300">
      <h2 className="text-xl font-bold text-center mb-2">Identidade Fictícia</h2>
      <div className="flex items-center space-x-4 mb-4">
        <img className="w-24 h-24 rounded-full border border-gray-400" src={persona.photo} alt={persona.name} />
        <div>
          <h3 className="text-lg font-semibold">{persona.name}</h3>
          <p className="text-sm text-gray-500">{persona.age} anos - {persona.gender}</p>
          <p className="text-sm text-gray-700">{persona.profession}</p>
        </div>
      </div>
      <p className="text-sm text-gray-500"><strong>Origem:</strong> {persona.origin}</p>
      <p className="text-sm text-gray-700 mt-2">{persona.bio}</p>
    </div>
  );
};

export default PersonaCard;
