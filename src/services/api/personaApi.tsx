const API_URL = "https://api.invenstory.dev";

export async function fetchPersona(apiKey: string, filters: any) {
  try {
    // const queryParams = new URLSearchParams(filters).toString();
    const response = await fetch(`${API_URL}/persona`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${apiKey}`,
      },
    });

    if (!response.ok) throw new Error("Erro ao buscar persona");

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default fetchPersona;
