import CategoriesList from "@/components/CategoriesList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase";

const Home = async () => {
  let categories = {};
  let favorites = {};

  const qs = await getDocs(collection(db, 'categories'));
  qs.forEach((category) => {
    categories[category.id] = category.data();
  });

  const querySnapshot = await getDocs(query(collection(db, 'items'), where('favorite', '==', true)));
  querySnapshot.forEach((item) => {
    const info = item.data();
    if (!categories[info.categoryId]) {
      return;
    }
    favorites[info.categoryId] = categories[info.categoryId];
    if (favorites[info.categoryId]['items']) {
      favorites[info.categoryId]['items'] = [...(favorites[info.categoryId]['items']), { ...info, id: item.id }];
    } else {
      favorites[info.categoryId]['items'] = [{ ...info, id: item.id }];
    }
  });

  return (<CategoriesList categories={favorites} displayFavDate />);
}

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
export default Home;