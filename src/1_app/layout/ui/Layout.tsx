import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderWidget from '@widgets/header-widget/ui/HeaderWidget.tsx';
import FooterWidget from '@widgets/footer-widget/ui/FooterWidget.tsx';
import NavigationWidget from '@widgets/navigation-widget/ui/NavigationWidget.tsx';

const Layout: React.FC = () => {
  return (
    <div className="bg-background text-text-primary grid min-h-dvh grid-cols-1 grid-rows-[auto_1fr_auto]">
      <HeaderWidget slot={<NavigationWidget />} />
      <main>
        <Outlet />
      </main>
      <FooterWidget />
    </div>
  );
};

export default Layout;
