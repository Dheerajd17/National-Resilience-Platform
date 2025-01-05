import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { motion } from 'framer-motion';

import { ReactNode } from 'react';

interface ProtectedProps {
  children: ReactNode;
  authentication?: boolean;
}

export default function Protected({ children, authentication = true }: ProtectedProps) {
  const navigate = useNavigate();
  const { isAuthenticated, loading, setLoading } = useAuthContext();

  useEffect(() => {
    if (!loading && authentication && !isAuthenticated) {
      navigate("/login", { 
        state: { 
          message: "Please sign in to access this feature",
          from: window.location.pathname 
        }
      });
    }
    setLoading(false);
  }, [isAuthenticated, navigate, authentication]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
          className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return <>{children}</>;
}