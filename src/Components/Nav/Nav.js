import React from "react";

const Nav = ({ pokemon }) => {
  if(!pokemon) return

  const types = [
    ...new Set(
      pokemon.flatMap((poke) => poke.types.map((type) => type.type.name))
    ),
  ];

  
};

export default Nav;
