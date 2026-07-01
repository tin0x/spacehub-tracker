import React from 'react';
import type { ButtonProps } from '@shared/ui/button/types.ts';
import { cn } from '@shared/lib/utils/cn.ts';

const Button: React.FC<ButtonProps> = ({ className, typeColor = 'primary', variant, Icon, children, ...rest }) => {
  const baseStyles =
    'flex items-center justify-center gap-2 px-2 py-2 text-lg font-bold transition-transform duration-200 ease-in-out hover:opacity-90 hover:cursor-pointer active:scale-95 disabled:pointer-events-none disabled:opacity-50';

  const buttonCase = {
    primary: 'bg-surface rounded-custom-md text-text-primary',
    secondary: '',
  };

  return (
    <button className={cn(buttonCase[typeColor], baseStyles, className)} {...rest}>
      {Icon && <Icon className="h-10 w-10 shrink-0 object-cover" />}
      {variant !== 'icon' && <span className="tabular-nums">{children}</span>}
    </button>
  );
};

export default Button;
