import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}  // ✅ Controlled Component
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}  // ✅ Controlled Component
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}  // ✅ Controlled Component
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
