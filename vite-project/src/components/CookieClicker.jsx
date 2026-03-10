import { useState } from "react";

function CookieClicker() {
  const [score, setScore] = useState(0);

  function handleClick() {
    setScore((prevScore) => prevScore + 1);
  }

  return (
    <section className="sidebar-story">
      <div className="story-label">Spill &amp; interaktivitet</div>
      <h2>Cookie Clicker</h2>
      <p>Poeng: {score}</p>

      <button className="cookie-btn" onClick={handleClick}>
        <img src="/pics/kuki.jpg" alt="Cookie" className="cookie-img" />
      </button>
    </section>
  );
}

export default CookieClicker;
