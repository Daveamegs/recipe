import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="bg-slate-500 flex justify-between py-4">
        <div className="shrink-0">
          <span className="pl-4">
            <a href="./">Recipee</a>
          </span>
        </div>
        <ul
          className="md:flex md:justify-between md:w-auto md:static fixed w-full text-center -top-full bg-inherit"
          id="nav"
        >
          <li className="">
            <a href="./">Recipes</a>
          </li>
          <li className="md:mx-3">
            <a href="./">Top Recipes</a>
          </li>
          <li>
            <a href="./">Vegetarian</a>
          </li>
          <li className="md:mx-3">
            <a href="./">Quick and Easy</a>
          </li>
          <li>
            <a href="./">Healthy</a>
          </li>
        </ul>
        <form className="px-4">
          <input
            type="search"
            placeholder="Search"
            aria-label="Search"
            className="px-2"
          />
          <button type="submit" className="bg-blue-500 px-2">
            Search
          </button>
        </form>

        {/* Hamburger Button */}
        <button onClick={toggleNavBar} class="md:hidden pr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    );
  }
}

const toggleNavBar = () => {
  const nav = document.getElementById("nav");
  nav.classList.toggle("-top-full");
  nav.classList.toggle("top-12");
};
