import BottomNav from "./BottomNav";
import TopNav from "./TopNav";

const NavBar = ({ children }) => {
  return (
    <>
      <TopNav />
      {children}
      <BottomNav />
    </>
  );
};

export default NavBar;