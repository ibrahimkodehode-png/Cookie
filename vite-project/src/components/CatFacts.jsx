import { useEffect, useState } from "react";

function CatFacts() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchCatFacts() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("https://catfact.ninja/facts?limit=10");

      if (!response.ok) {
        throw new Error("Kunne ikke hente kattfakta.");
      }

      const data = await response.json();
      setFacts(data.data || []);
    } catch (err) {
      setError(err.message || "Noe gikk galt.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCatFacts();
  }, []);

  return (
    <section className="feature-story cat-facts-box">
      <div className="story-label">Dagens hovedsak</div>
      <h2>Cat Facts</h2>

      {loading && <p>Loading...</p>}
      {error && <p>Feil: {error}</p>}

      {!loading && !error && (
        <ul className="cat-facts-list">
          {facts.map((item, index) => (
            <li key={item.fact ?? index}>{item.fact}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default CatFacts;
