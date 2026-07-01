import React from 'react';
import { navigationData } from '@widgets/navigation-widget/model/constants.ts';
import { NavLink } from 'react-router-dom';
import { cn } from '@shared/lib/utils/cn.ts';

const NavigationWidget: React.FC = () => {
  return (
    <nav className="w-full">
      <ul className="flex h-screen w-full flex-col items-start gap-7.5 lg:h-auto lg:flex-row lg:items-center">
        {navigationData.map((item) => (
          <li className="w-full lg:w-auto" key={item.title}>
            <NavLink
              className={({ isActive }) =>
                cn('block w-full border-b-2 border-transparent py-2 text-lg', 'hover:border-surface', {
                  'border-surface': isActive,
                })
              }
              to={item.link}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationWidget;
