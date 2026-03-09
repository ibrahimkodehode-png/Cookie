import { useEffect, useState } from "react";

function CatFacts() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCatFacts() {
      try {
        const response = await fetch("https://catfact.ninja/facts?limit=5");

        if (!response.ok) {
          throw new Error("Kunne ikke hente kattfakta.");
        }

        const data = await response.json();
        setFacts(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCatFacts();
  }, []);

  return (
    <section>
      <h2>Cat Facts</h2>

      {loading && <p>Loading...</p>}
      {error && <p>Feil: {error}</p>}

      {!loading && !error && (
        <ul>
          {facts.map((fact, index) => (
            <li key={index}>{fact.fact}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default CatFacts;
