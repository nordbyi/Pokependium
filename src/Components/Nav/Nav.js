import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import './Nav.css'

const Nav = ({ pokemon }) => {
  const {pathname} = useLocation()
  
  if(!pokemon) return
  
  const types = [
    ...new Set(
      pokemon.flatMap((poke) => poke.types.map((type) => type.type.name))
    ),
  ];

  const navLinks = types.map(type => {
    return <NavLink isActive={() => pathname.includes(type)} to={`/${type}`} className='type' key={type}>{type}</NavLink>
  })
  
  return (
    <div className="nav">
      <div className="types">
        <NavLink className='type' exact to={'/'}>All</NavLink>
        {navLinks}
        <NavLink className='type' exact to={'/info/aboutme'}>About Me</NavLink>
      </div>
    </div>
  )
};

export default Nav;

Nav.propTypes = {
  pokemon: PropTypes.array.isRequired
}