import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="ml-3 p-4 lg:p-5 absolute z-50">
      <Link className="flex" to="/">
        <img className="hidden lg:block w-36" src="/images/Logo-Resmacon.svg" />
        <img className="lg:hidden w-9" src="/images/Logo-Resmacon-Hoja.svg" />
      </Link>
    </nav>
  );
};

export default Header;
