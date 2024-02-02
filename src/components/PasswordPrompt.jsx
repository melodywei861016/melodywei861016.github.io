import React, { useState } from 'react';
import './PasswordPrompt.css';

const PasswordPrompt = ({ onPasswordSubmit }) => {
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onPasswordSubmit(password);
  }

  return (
    <div className="password-prompt-container">
      <form className="password-prompt-form" onSubmit={handleSubmit}>
        <div className="password-prompt-label">password:</div>
        <input className="password-prompt-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="password-prompt-button" type="submit">submit</button>
      </form>
    </div>
  );
}

export default PasswordPrompt;
