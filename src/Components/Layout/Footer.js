import React from "react";



const Footer = () => {
  return( 
  <div style={style}> 
    <h1>It's A Footer!</h1>
  </div>
  );
};

const style  = {
  position: 'fixed',
  left: 0,
  bottom: 0,
  backgroundColor: 'purple',
  color: 'ivory',
  width: '100%',
  display: 'fixed',
  borderTop: '5px solid black',
  textAlign: 'center'
}

export default Footer;