import { useState } from "react";
import "./Header.css";

function SearchBar(props) {
  return (
    <div className="searchbar">
      <label className="searchbar__label" htmlFor="search">
        <i className="material-icons">search</i>
      </label>
      <input id="search" type="search" className="searchbar__input" onChange={(e) => props.search(e.target.value)}/>
      {props.query!='' && <i className="material-icons" onClick={()=> props.search('')}>close</i>}
    </div>
  );
}

function Header(props) {
  return (
    <div className="fixed-top">
      <nav className="header--fixed">
        <div className="">
          <a href="/" className="header__brand">
            <i className="material-icons header__logo">description</i>
            <span className="header__title">The Notes</span>
          </a>
          <SearchBar query={props.query} setquery={props.setQuery} search={props.search}/>
        </div>
      </nav>
    </div>
  );
}

export default Header;
