'use client'

import { RiHome2Line, RiHome2Fill, RiHeart3Line, RiHeart3Fill, RiPriceTag3Line, RiPriceTag3Fill, RiBox3Line, RiBox3Fill } from "react-icons/ri";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const BottomNav = () => {
  const pathname = usePathname();
  return (
    <nav className="btm-nav md:hidden z-20">
      <Link className={cn("text-accent", { active: pathname == '/' })} href="/">
        <div className="flex flex-col text-xl items-center gap-y-1">
          {pathname == '/' ? <RiHome2Fill /> : <RiHome2Line />}
          <span className="text-xs">
            Home
          </span>
        </div>
      </Link>
      <Link className={cn("text-accent", { active: pathname == '/categories/create' })} href="/categories/create">
        <div className="flex flex-col text-xl items-center gap-y-1">
          {pathname == '/categories/create' ? <RiPriceTag3Fill /> : <RiPriceTag3Line />}
          <span className="text-xs">
            Categories
          </span>
        </div>
      </Link>
      <Link className={cn("text-accent", { active: pathname == '/items/create' })} href="/items/create">
        <div className="flex flex-col text-xl items-center gap-y-1">
          {pathname == '/items/create' ? <RiBox3Fill /> : <RiBox3Line />}
          <span className="text-xs">
            Items
          </span>
        </div>
      </Link>
      <Link className={cn("text-accent", { active: pathname == '/favorites' })} href="/favorites">
        <div className="flex flex-col text-xl items-center gap-y-1">
          {pathname == '/favorites' ? <RiHeart3Fill /> : <RiHeart3Line />}
          <span className="text-sm">
            Favorites
          </span>
        </div>
      </Link>
    </nav>
  );
};

export default BottomNav;