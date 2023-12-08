'use client'

import SearchBar from "@/partials/SearchBar";
import Link from "next/link";

const TopNav = ({ hasSearchBar = false }) => {
  return (
    <header className="navbar fixed top-0 bg-base-100 flex-wrap md:flex-nowrap gap-3 z-20">
      <div className="flex-1 md:flex-none">
        <Link className="btn btn-ghost text-xl" href="/" data-testid="main-button">VGS</Link>
      </div>
      <div className="flex-1 justify-center gap-2 hidden md:flex" data-testid="nav-buttons">
        <Link className="btn btn-ghost text-xl" href="/categories/create">Categories</Link>
        <Link className="btn btn-ghost text-xl" href="/items/create">Items</Link>
        <Link className="btn btn-ghost text-xl" href="/favorites">Favorites</Link>
      </div>
      {hasSearchBar && (<SearchBar />)}
    </header >
  );
};

export default TopNav;