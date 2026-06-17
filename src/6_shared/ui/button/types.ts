import React, { type SVGProps } from 'react';

export type ButtonProps = {
  className?: string;
  typeColor: 'primary' | 'secondary';
  variant: 'text' | 'icon';
  Icon?: React.ComponentType<SVGProps<SVGElement>>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
