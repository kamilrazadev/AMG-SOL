// ScrollLink.js
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ScrollLink = ({ to, children }) => {
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;

    if (hash) {
      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleClick = () => {
    // You can close the navbar here
    const navBar = document.getElementById('nav-bar');
    navBar.style.right = '100%';
  };

  return <Link to={to} onClick={handleClick}>{children}</Link>;
};

export default ScrollLink;
