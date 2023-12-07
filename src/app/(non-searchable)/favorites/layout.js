const FavoritesLayout = ({ children }) => {
  return (
    <div className="mx-auto">
      <h2 className="mx-auto text-4xl w-fit font-bold mt-2 mb-6">Favorites</h2>
      {children}
    </div>
  );
};

export default FavoritesLayout;