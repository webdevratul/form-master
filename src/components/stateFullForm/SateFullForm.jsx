import { useState } from "react";

const SateFullForm = () => {
  const [name, setName] = useState("Hello");
  const [email, setEmail] = useState("example@email.com");
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be 6 characters longer");
    } else {
      setError("");
      console.log(email, password, name);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
          id=""
        />
        <br />
        <input
          value={email}
          onChange={handleEmailChange}
          type="email"
          name="email"
          id=""
        />
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
          id=""
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SateFullForm;
