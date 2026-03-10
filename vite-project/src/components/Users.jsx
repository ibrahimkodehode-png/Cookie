import { useState } from "react";

const mockData = [
  { username: "Ola Normann", email: "ola.normann@norge.no" },
  { username: "Torleif", email: "torleif@kodehode.no" },
  { username: "Jan Egil", email: "jan.egil@kodehode.no" },
  { username: "Sander", email: "sander@kodehode.no" },
];

function Users() {
  const [users, setUsers] = useState(mockData);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  function handleAddUser() {
    if (!username.trim() || !email.trim()) return;

    const newUser = { username, email };
    setUsers([...users, newUser]);
    setUsername("");
    setEmail("");
  }

  return (
    <section>
      <h2>Users</h2>

      <div className="user-form">
        <input
          type="text"
          placeholder="Brukernavn"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-post"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleAddUser}>Legg til bruker</button>
      </div>

      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>{user.username}</strong>
            <span>{user.email}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Users;
