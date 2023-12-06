import NavBar from "@/components/NavBar";

const SearchableLayout = ({ children }) => {
  return (
    <NavBar hasSearchBar >
      <main className="overflow-y-auto mb-16 mt-32 py-2 px-4 md:my-16">
        {children}
      </main>
    </NavBar>
  );
};

export default SearchableLayout;