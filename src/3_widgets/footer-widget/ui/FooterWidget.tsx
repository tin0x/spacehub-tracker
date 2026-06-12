import React from 'react';

const FooterWidget: React.FC = () => {
  return (
    <footer>
      <div className="px-10 py-5 text-center">
        <span className="text-text-secondary text-sm font-bold">{`@${new Date().getFullYear()} SpaceHub. All rights reserved.`}</span>
      </div>
    </footer>
  );
};

export default FooterWidget;
