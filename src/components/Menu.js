import React from "react";
import { bool } from "prop-types";
import TarotCards from "./TarotCards";

export default function Menu({ open, setOpen, consultado, children, cartas }) {
  let className = "menu";
  if (open) {
    className += " active";
  }

  //TODO CAMBIAR CONDICION
  if (consultado !== "") {
    className += " tarot-desk";
  }

  let form;

  if (consultado === "") {
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
        <div className="row d-flex justify-content-center">{children}</div>
      </div>
    );
  } else {
    form = (
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          {cartas ? (
            <TarotCards cartas={cartas}></TarotCards>
          ) : (
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
      </div>
    );
  }
  return <nav className={className}>{form}</nav>;
}
Menu.propTypes = {
  open: bool.isRequired,
};
