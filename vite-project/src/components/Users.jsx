import { useState } from "react";

const mockData = [
  { id: 1, username: "Ola Normann", email: "ola.normann@norge.no" },
  { id: 2, username: "Torleif", email: "torleif@kodehode.no" },
  { id: 3, username: "Jan Egil", email: "jan.egil@kodehode.no" },
  { id: 4, username: "Sander", email: "sander@kodehode.no" },
];

function Users() {
  const [users, setUsers] = useState(mockData);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  function handleAddUser() {
    const trimmedUsername = username.trim();
    const trimmedEmail = email.trim();

    if (!trimmedUsername || !trimmedEmail) return;

    const newUser = {
      id: Date.now(),
      username: trimmedUsername,
      email: trimmedEmail,
    };

    setUsers((prevUsers) => [newUser, ...prevUsers]);
    setUsername("");
    setEmail("");
  }

  return (
    <section className="people-story">
      <div className="story-label">Samfunn</div>
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
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.username}</strong>
            <span>{user.email}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Users;
