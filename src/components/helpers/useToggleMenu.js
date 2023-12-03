import { useState, useEffect } from 'react';

const useToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const closeMenuOnEscape = event => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', closeMenuOnEscape);

    return () => {
      document.removeEventListener('keydown', closeMenuOnEscape);
    };
  }, [isOpen]);

  return [isOpen, toggleMenu];
};

export default useToggleMenu;
