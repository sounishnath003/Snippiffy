import React from 'react';



function Header(): JSX.Element {
  return (
    <React.Fragment>
      <nav className="p-1 bg-gray-50 border-b">
        <div className="text-xl cursor-pointer px-2 text-blue-800 tracking-wide">
          Snipiffy
        </div>
      </nav>
    </React.Fragment>
  );
}


export default Header;