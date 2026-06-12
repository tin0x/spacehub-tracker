import React from 'react';
import { cn } from '@shared/lib/utils/cn.ts';
import type { HeaderWidgetProps } from '@widgets/header-widget/types.ts';
import Logo from '@shared/ui/logo/Logo.tsx';

const HeaderWidget: React.FC<HeaderWidgetProps> = ({ className, slot }) => {
  return (
    <header className={cn(className)}>
      <div className="flex items-center justify-between px-3 py-10">
        <Logo pathTo="/" />
        {slot}
      </div>
    </header>
  );
};

export default HeaderWidget;
