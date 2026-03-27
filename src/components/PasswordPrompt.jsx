import React, { useState } from 'react';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '70vh',
    padding: '30px 15px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '360px',
    padding: '30px',
    border: '1px solid #d7dcdf',
    borderRadius: '12px',
    backgroundColor: '#fff',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
    boxSizing: 'border-box',
  },
  title: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '28px',
    fontWeight: 600,
    color: '#1a1b1f',
    marginBottom: '12px',
  },
  helper: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '15px',
    lineHeight: '24px',
    color: '#777',
    marginBottom: '20px',
  },
  label: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '25px',
    color: '#4f5660',
    marginBottom: '6px',
  },
  input: {
    width: '100%',
    height: '44px',
    border: '1px solid #c6ccd2',
    borderRadius: '8px',
    padding: '0 12px',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '16px',
    outline: 'none',
    boxSizing: 'border-box',
  },
  error: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '14px',
    lineHeight: '22px',
    color: '#b42318',
    marginTop: '10px',
    marginBottom: '0',
  },
  button: {
    width: '100%',
    backgroundColor: '#1a1b1f',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 500,
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    marginTop: '16px',
    padding: '12px 16px',
    textTransform: 'lowercase',
  },
  disabledButton: {
    cursor: 'not-allowed',
    opacity: 0.6,
  },
};

const PasswordPrompt = ({ errorMessage, helperText, isSubmitting, onPasswordSubmit }) => {
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onPasswordSubmit(password);
  }

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.title}>Protected Work</div>
        {helperText ? <p style={styles.helper}>{helperText}</p> : null}
        <label htmlFor="work-password" style={styles.label}>Password</label>
        <input
          id="work-password"
          style={styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isSubmitting}
        />
        {errorMessage ? <p style={styles.error}>{errorMessage}</p> : null}
        <button
          style={isSubmitting || !password.trim() ? { ...styles.button, ...styles.disabledButton } : styles.button}
          disabled={isSubmitting || !password.trim()}
          type="submit"
        >
          {isSubmitting ? 'checking...' : 'submit'}
        </button>
      </form>
    </div>
  );
}

export default PasswordPrompt;
