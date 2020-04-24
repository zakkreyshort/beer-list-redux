import React from "react";

const Header = () => {
  return(
    <div style={styleHeader}>
      <h1>It's a header!</h1>
    </div>
  );
};

const styleHeader  = {
  display: 'flex',
  justifyContent: 'center', 
  margin: 0,
  backgroundColor: 'purple',
  color: 'ivory',
  width: '100%',
  borderBottom: '5px solid black'
}


export default Header;