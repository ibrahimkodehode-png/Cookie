import "./App.css";
import CookieClicker from "./components/CookieClicker";
import CatFacts from "./components/CatFacts";
import Users from "./components/Users";

function App() {
  return (
    <main>
      <h1>React Hooks Oppgave</h1>

      <div className="cookie-bg">
        <CookieClicker />
      </div>

      <div className="cat-bg">
        <CatFacts />
      </div>

      <div className="user-bg">
        <Users />
      </div>
    </main>
  );
}

export default App;
