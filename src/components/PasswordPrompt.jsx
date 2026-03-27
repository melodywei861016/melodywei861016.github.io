import React, { useState } from 'react';
import './PasswordPrompt.css';

const PasswordPrompt = ({ errorMessage, helperText, isSubmitting, onPasswordSubmit }) => {
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onPasswordSubmit(password);
  }

  return (
    <div className="password-prompt-container">
      <form className="password-prompt-form" onSubmit={handleSubmit}>
        <div className="password-prompt-title">Protected Work</div>
        {helperText ? <p className="password-prompt-helper">{helperText}</p> : null}
        <label className="password-prompt-label" htmlFor="work-password">Password</label>
        <input
          className="password-prompt-input"
          id="work-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isSubmitting}
        />
        {errorMessage ? <p className="password-prompt-error">{errorMessage}</p> : null}
        <button className="password-prompt-button" disabled={isSubmitting || !password.trim()} type="submit">
          {isSubmitting ? 'checking...' : 'submit'}
        </button>
      </form>
    </div>
  );
}

export default PasswordPrompt;
