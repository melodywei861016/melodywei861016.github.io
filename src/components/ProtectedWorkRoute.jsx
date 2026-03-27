import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PasswordPrompt from './PasswordPrompt.jsx';
import config from '../config';

const WORK_ACCESS_STORAGE_KEY = 'work-section-access';

const hasStoredAccess = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.sessionStorage.getItem(WORK_ACCESS_STORAGE_KEY) === 'granted';
};

const ProtectedWorkRoute = ({ children }) => {
  const location = useLocation();
  const [hasAccess, setHasAccess] = useState(hasStoredAccess);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePasswordSubmit = async (password) => {
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch(`${config.apiUrl}/api/check-password`, {
        method: 'POST',
        body: JSON.stringify({ password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setErrorMessage('That password was not recognized.');
        return;
      }

      window.sessionStorage.setItem(WORK_ACCESS_STORAGE_KEY, 'granted');
      setHasAccess(true);
    } catch (error) {
      console.error(error);
      setErrorMessage('Unable to verify the password right now. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (hasAccess) {
    return children;
  }

  return (
    <PasswordPrompt
      errorMessage={errorMessage}
      helperText={
        location.pathname === '/work'
          ? 'Enter the password to view my protected work samples.'
          : 'Enter the password to open this protected case study.'
      }
      isSubmitting={isSubmitting}
      onPasswordSubmit={handlePasswordSubmit}
    />
  );
};

export default ProtectedWorkRoute;
