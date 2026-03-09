import { useState } from "react";

function CookieClicker() {
  const [score, setScore] = useState(0);

  function handleClick() {
    setScore(score + 1);
  }

  return (
    <section>
      <h2>Cookie Clicker</h2>
      <p>Poeng: {score}</p>
      <button onClick={handleClick}>🍪 Klikk meg</button>
    </section>
  );
}

export default CookieClicker;
