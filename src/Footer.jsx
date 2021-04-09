import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const getYear = new Date().getFullYear();
  return (
    <>
      <footer className="w-100 text-center">
        <p>
          © {getYear} Jayman Patel. All Rights Reserved |<NavLink exact activeClassName="footer_active" to="/termpage" className="term"> Terms and Conditions</NavLink>
        </p>
      </footer>
    </>
  );
};

export default Footer;
