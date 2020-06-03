import Header from './header';
import React from 'react';

const layoutStyle = {
    backgroundColor: '#900C3F',
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
  };
  
  const Layout = props => (
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  );
  
  export default Layout;