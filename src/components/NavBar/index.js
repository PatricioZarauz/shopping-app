import BottomNav from "./BottomNav";
import TopNav from "./TopNav";

const NavBar = ({ children, hasSearchBar }) => {
  return (
    <>
      <TopNav hasSearchBar={hasSearchBar} />
      {children}
      <BottomNav />
    </>
  );
};

export default NavBar;