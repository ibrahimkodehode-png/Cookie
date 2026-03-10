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

      <section className="paper-topline">
        <span>Frontend</span>
        <span>Hooks</span>
        <span>State</span>
        <span>API</span>
        <span>Users</span>
      </section>

      <section className="paper-grid">
        <article className="paper-column sidebar-story">
          <div className="story-label">Spill & Interaktivitet</div>
          <CookieClicker />
        </article>

        <article className="paper-column feature-story">
          <div className="story-label">Dagens hovedsak</div>
          <CatFacts />
        </article>

        <article className="paper-column people-story">
          <div className="story-label">Samfunn</div>
          <Users />
        </article>
      </section>
    </main>
  );
}

export default App;
