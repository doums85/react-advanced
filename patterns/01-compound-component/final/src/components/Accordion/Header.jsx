import React, { useRef } from 'react';
import { useState } from 'react';

const Header = ({ children }) => {
  const [isExpand, setIsExpand] = useState(false);
  const ref = useRef();

  function handleIsExpand() {
    const content = ref.current.parentNode;

    document.querySelectorAll('.accordion__item').forEach(function (parent) {
      if (parent.classList.contains('active')) parent.classList.remove('active');
    });

    if (isExpand) return content.classList.remove('active');

    content.classList.add('active');
    setIsExpand(true);
  }



  return (
    <header ref={ref} onClick={handleIsExpand} className="accordion__header">
      <i className="bx bx-plus accordion__icon" />
      {children}
    </header>
  );
};

export default Header;
