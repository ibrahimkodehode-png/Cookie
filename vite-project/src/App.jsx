import "./App.css";
import CookieClicker from "./components/CookieClicker";
import CatFacts from "./components/CatFacts";
import Users from "./components/Users";

function App() {
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
          <CookieClicker />
        </div>

        <div className="paper-column">
          <CatFacts />
        </div>

        <div className="paper-column">
          <Users />
        </div>
      </div>
    </main>
  );
}

export default App;
