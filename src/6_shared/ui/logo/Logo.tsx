import React from 'react';
import { Link } from 'react-router-dom';
import type { LogoProps } from '@shared/ui/logo/types.ts';
import LogoIcon from '@shared/assets/icons/logo.svg?react';

const Logo: React.FC<LogoProps> = ({ pathTo }) => {
  return (
    <Link className="flex gap-x-4.5" to={pathTo}>
      <LogoIcon className="h-4 w-4" />
      <span className="text-text-primary text- text-lg font-bold">SpaceLaunch</span>
    </Link>
  );
};

export default Logo;
