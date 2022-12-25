import React from 'react';
import Content from './Content';
import Header from './Header';
import './Accordion.css'
const Accordion = ({ children }) => {
  return <div className="accordion__container">{children}</div>;
};

Accordion.Header = Header;
Accordion.Content = Content;

export default Accordion;
