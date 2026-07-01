import React, { useEffect } from 'react';
import Button from '@shared/ui/button/Button.tsx';
import IconBurger from '@shared/assets/icons/burger.svg?react';
import IconClose from '@shared/assets/icons/close.svg?react';
import type { BurgerProps } from '@shared/ui/burger/types.ts';

const Burger: React.FC<BurgerProps> = ({ slot, onToggle, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div>
      <Button onClick={onToggle} variant="icon" typeColor="primary" Icon={isOpen ? IconClose : IconBurger} />
      {isOpen && <div className="fixed top-30 left-0 z-100 h-screen w-full bg-gray-900 p-6 shadow-xl">{slot}</div>}
    </div>
  );
};

export default Burger;
