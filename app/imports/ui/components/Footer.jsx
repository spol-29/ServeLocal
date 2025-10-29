import React from 'react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => {
  const divStyle = { position: 'sticky', bottom: '0', paddingTop: '20px', height: '85px' };
  return (
    <footer>
      <div style={divStyle} className="ui center aligned fluid container">
        <p>Created by Sriram Polineni</p>
      </div>
    </footer>
  );
};

export default Footer;
