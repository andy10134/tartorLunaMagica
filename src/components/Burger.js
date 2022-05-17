import React from 'react'
import { bool, func } from 'prop-types';

export default function Burger({ open, setOpen }) {
    let className = 'button button';
    if (open) {
      className += '-active';
    }
  return (
      <button className={className} open={open} onClick={() => setOpen(!open)}>
        <div className="a1" />
        <div className="a2" />
        <div className="a3" />
    </button>
  )
}
Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  };