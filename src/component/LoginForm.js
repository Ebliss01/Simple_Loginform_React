import React, { useState } from 'react';

function LoginForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const correctName = 'Ebliss';
  const correctEmail = 'john@example.com';
  const correctPassword = 'password123';

  const handleLogin = () => {
    if (name === correctName && email === correctEmail && password === correctPassword) {
      setLoggedIn(true);
      setError('');
    } else {
      setLoggedIn(false);
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
      {loggedIn ? (
        <div>Welcome, {name}</div>
      ) : (
        <div>
          <h2>Welcome... <br/> Mr. Efe</h2>
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button onClick={handleLogin}>Login</button>
          {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
      )}
    </div>
  );
}

export default LoginForm;