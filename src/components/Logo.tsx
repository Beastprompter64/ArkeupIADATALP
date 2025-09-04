import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate('/')}
      className="flex items-center hover:opacity-80 transition-opacity"
    >
      <img 
        src="/Rebranding Innovation-02.png" 
        alt="Arkeup Logo" 
        className="h-8 w-auto"
      />
    </button>
  );
};

export default Logo;