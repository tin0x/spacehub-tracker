import React from 'react';

export type BurgerProps = {
  slot: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
};
