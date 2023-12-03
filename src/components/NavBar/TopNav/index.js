import Link from "next/link";

const TopNav = () => {
  return (
    <header className="navbar bg-base-100 flex-wrap md:flex-nowrap gap-3">
      <div className="flex-1 md:flex-none">
        <Link className="btn btn-ghost text-xl" href="/">VGS</Link>
      </div>
      <div className="flex-1 justify-center gap-2 hidden md:flex">
        <Link className="btn btn-ghost text-xl" href="/categories/create">Categories</Link>
        <Link className="btn btn-ghost text-xl" href="/items/create">Items</Link>
        <Link className="btn btn-ghost text-xl" href="/favorites">Favorites</Link>
      </div>
      <div className="w-full flex-none md:shrink md:w-fit">
        <input type="text" placeholder="Search" className="input input-bordered w-full" />
      </div>
    </header>
  );
};

export default TopNav;