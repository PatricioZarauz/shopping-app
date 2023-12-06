import NavBar from "@/components/NavBar";

const NonSearchableLayout = ({ children }) => {
  return (
    <NavBar>
      <main className="overflow-y-auto my-16 py-2 px-4">
        {children}
      </main>
    </NavBar>
  );
};

export default NonSearchableLayout;