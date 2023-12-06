import CategoriesList from "@/components/CategoriesList";

const Home = async () => {
  const items = [
    { name: 'Ejemplo 1', image: "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg", favorite: false, favDate: null },
    { name: 'Ejemplo 2', image: "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg", favorite: true, favDate: "31/12/2023" },
    { name: 'Ejemplo 3', image: "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg", favorite: false, favDate: null },
  ];
  const items1 = [
    { name: 'Ejemplo 4', image: "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg", favorite: false, favDate: null },
    { name: 'Ejemplo 5', image: "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg", favorite: true, favDate: "31/12/2023" },
    { name: 'Ejemplo 6', image: "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg", favorite: false, favDate: null },
  ];
  const items2 = [
    { name: 'Ejemplo 7', image: "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg", favorite: false, favDate: null },
    { name: 'Ejemplo 8', image: "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg", favorite: true, favDate: "31/12/2023" },
    { name: 'Ejemplo 9', image: "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg", favorite: false, favDate: null },
  ];
  const items3 = [
    { name: 'Ejemplo 10', image: "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg", favorite: false, favDate: null },
    { name: 'Ejemplo 11', image: "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg", favorite: true, favDate: "31/12/2023" },
    { name: 'Ejemplo 12', image: "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg", favorite: false, favDate: null },
  ];
  const items4 = [
    { name: 'Ejemplo 13', image: "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg", favorite: false, favDate: null },
    { name: 'Ejemplo 14', image: "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg", favorite: true, favDate: "31/12/2023" },
    { name: 'Ejemplo 15', image: "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg", favorite: false, favDate: null },
  ];
  const items5 = [
    { name: 'Ejemplo 16', image: "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg", favorite: false, favDate: null },
    { name: 'Ejemplo 17', image: "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg", favorite: true, favDate: "31/12/2023" },
    { name: 'Ejemplo 18', image: "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg", favorite: false, favDate: null },
  ];
  const categories = {
    'First Category': { name: 'First Category', labelColor: '#ff6600', items },
    'Second Category': { name: 'Second Category', labelColor: '#ffcc00', items: items1 },
    'Third Category': { name: 'Third Category', labelColor: '#3366ff', items: items2 },
    'Forth Category': { name: 'Forth Category', labelColor: '#00cc99', items: items3 },
    'Fifth Category': { name: 'Fifth Category', labelColor: '#660033', items: items4 },
    'Sixth Category': { name: 'Sixth Category', labelColor: '#0099cc', items: items5 }
  };

  return (<CategoriesList categories={categories} />);
}

export default Home;