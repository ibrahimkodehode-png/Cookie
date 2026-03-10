import { useState } from "react";
import "./App.css";
import CatFacts from "./components/CatFacts";

const initialUsers = [
  { id: 1, name: "Ola Normann", email: "ola.normann@norge.no" },
  { id: 2, name: "Torleif", email: "torleif@kodehode.no" },
  { id: 3, name: "Jan Egil", email: "jan.egil@react.no" },
];

function App() {
  const [score, setScore] = useState(0);
  const [users, setUsers] = useState(initialUsers);
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  function handleClickCookie() {
    setScore((prev) => prev + 1);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleAddUser(event) {
    event.preventDefault();

    const trimmedName = form.name.trim();
    const trimmedEmail = form.email.trim();

    if (!trimmedName || !trimmedEmail) return;

    const newUser = {
      id: Date.now(),
      name: trimmedName,
      email: trimmedEmail,
    };

    setUsers((prev) => [newUser, ...prev]);
    setForm({ name: "", email: "" });
  }

  return (
    <main className="newspaper">
      <header className="paper-header">
        <p className="paper-date">Mandag • Digital utgave</p>
        <h1 className="paper-title">The React Times</h1>
        <p className="paper-subtitle">
          Interaktive nyheter om state, API-er og brukere
        </p>
      </header>

      <nav className="paper-topline" aria-label="Seksjoner">
        <span>Frontend</span>
        <span>Hooks</span>
        <span>State</span>
        <span>API</span>
        <span>Users</span>
      </nav>

      <div className="paper-grid">
        <div className="paper-column">
          <section className="sidebar-story">
            <div className="story-label">Spill &amp; interaktivitet</div>
            <h2>Cookie Clicker</h2>
            <p>Poeng: {score}</p>
            <button onClick={handleClickCookie}>🍪 Klikk meg</button>
          </section>
        </div>

        <div className="paper-column">
          <CatFacts />
        </div>

        <div className="paper-column">
          <section className="people-story">
            <div className="story-label">Samfunn</div>
            <h2>Users</h2>

            <form className="user-form" onSubmit={handleAddUser}>
              <input
                type="text"
                name="name"
                placeholder="Brukernavn"
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="E-post"
                value={form.email}
                onChange={handleChange}
              />
              <button type="submit">Legg til bruker</button>
            </form>

            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  <strong>{user.name}</strong>
                  <span>{user.email}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
