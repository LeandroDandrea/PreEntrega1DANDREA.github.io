import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div>
      <CartWidget />
      <div class="list-group">
        <ul>
          <a href="#" class="list-group-item list-group-item-action">
          <span class="badge text-bg-success">CELULAR</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
          <span class="badge text-bg-success">TELEVISOR</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
          <span class="badge text-bg-success">NOTEBOOK</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
          <span class="badge text-bg-success">TABLET</span>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
