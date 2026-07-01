import React, { useState } from 'react';
import { cn } from '@shared/lib/utils/cn.ts';
import type { HeaderWidgetProps } from '@widgets/header-widget/types.ts';
import Logo from '@shared/ui/logo/Logo.tsx';
import Burger from '@shared/ui/burger/Burger.tsx';
import { useLocation } from 'react-router-dom';

const HeaderWidget: React.FC<HeaderWidgetProps> = ({ className, slot }) => {
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  const { pathname } = useLocation();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    if (isOpenBurger) setIsOpenBurger(false);
    setPrevPathname(pathname);
  }

  return (
    <header className={cn('border-text-primary border-b-2', className)}>
      <div className="flex items-center justify-between px-4 py-6 md:px-10">
        <Logo pathTo="/" />
        <div className="hidden lg:block">{slot}</div>
        <div className="lg:hidden">
          <Burger isOpen={isOpenBurger} onToggle={() => setIsOpenBurger((prev) => !prev)} slot={slot} />
        </div>
      </div>
    </header>
  );
};

export default HeaderWidget;
