import React from 'react';

const FooterWidget: React.FC = () => {
  return (
    <footer>
      <div className="border-text-primary border-t-2 px-10 py-5 text-center">
        <span className="text-text-secondary text-base font-bold">{`@ ${new Date().getFullYear()} SpaceHub. Licensed under MIT.`}</span>
      </div>
    </footer>
  );
};

export default FooterWidget;
