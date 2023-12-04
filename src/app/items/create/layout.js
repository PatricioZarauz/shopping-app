const ItemsCreateLayout = ({ children }) => {
  return (
    <div className="mx-auto md:max-w-lg">
      <h2 className="mx-auto text-4xl w-fit font-bold mt-2 mb-6">Create Item</h2>
      {children}
    </div>
  );
};

export default ItemsCreateLayout;