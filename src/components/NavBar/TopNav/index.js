'use client'

import Link from "next/link";

const TopNav = ({ hasSearchBar = false }) => {
  return (
    <header className="navbar fixed top-0 bg-base-100 flex-wrap md:flex-nowrap gap-3 z-20">
      <div className="flex-1 md:flex-none">
        <Link className="btn btn-ghost text-xl" href="/">VGS</Link>
      </div>
      <div className="flex-1 justify-center gap-2 hidden md:flex">
        <Link className="btn btn-ghost text-xl" href="/categories/create">Categories</Link>
        <Link className="btn btn-ghost text-xl" href="/items/create">Items</Link>
        <Link className="btn btn-ghost text-xl" href="/favorites">Favorites</Link>
      </div>
      {hasSearchBar && (
        <div className="w-full flex-none md:shrink md:w-fit">
          <input type="text" placeholder="Search" className="input input-bordered w-full" />
        </div>
      )}
    </header >
  );
};

export default TopNav;