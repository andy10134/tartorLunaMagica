import React from "react";
import { bool } from "prop-types";

export default function Menu({ open, setOpen, consultado, children }) {
 
  let className = "menu";
  if (open) {
    className += " active";
  }

  let form;

  if (consultado === '') {
    form = (
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <img
            className="col-5"
            src="../luna-magica-logo.png"
            style={{ marginTop: "-70px" }}
            alt="logo"
            height="509px"
          />
          <h1 className="col-12 logo">Luna Magica</h1>
        </div>
        <div className="row d-flex justify-content-center">
          {children}
        </div>
      </div>
    );
  }
  return <nav className={className}>{form}</nav>;
}
Menu.propTypes = {
  open: bool.isRequired,
};
