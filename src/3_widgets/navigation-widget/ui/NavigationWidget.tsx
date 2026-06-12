import React from 'react';
import { navigationData } from '@widgets/navigation-widget/constants.ts';
import { NavLink } from 'react-router-dom';
import { cn } from '@shared/lib/utils/cn.ts';

const NavigationWidget: React.FC = () => {
  return (
    <nav>
      <ul className="flex items-center gap-7.5">
        {navigationData.map((item) => (
          <li key={item.title}>
            <NavLink
              className={({ isActive }) =>
                cn('border-b-2 border-transparent py-2', 'hover:border-surface', { 'border-surface': isActive })
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
