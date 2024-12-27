import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

import { ReactNode } from 'react';

interface ProtectedProps {
  children: ReactNode;
  authentication?: boolean;
}

export default function Protected({ children, authentication = true }: ProtectedProps) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthContext();

  useEffect(() => {
    if (authentication && !isAuthenticated) {
      navigate("/login", { 
        state: { 
          message: "Please sign in to access this feature",
          from: window.location.pathname 
        }
      });
    }
  }, [isAuthenticated, navigate, authentication]);

  return <>{children}</>;
}