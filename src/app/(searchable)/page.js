import CategoriesList from "@/components/CategoriesList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

const Home = async ({ searchParams }) => {
  let categories = {};
  let filteredRes = {};

  const qs = await getDocs(collection(db, 'categories'));
  qs.forEach((category) => {
    categories[category.id] = category.data();
  });

  const querySnapshot = await getDocs(collection(db, 'items'));
  querySnapshot.forEach((item) => {
    const info = item.data();
    if (categories[info.categoryId]['items']) {
      categories[info.categoryId]['items'] = [...(categories[info.categoryId]['items']), { ...info, id: item.id }];
    } else {
      categories[info.categoryId]['items'] = [{ ...info, id: item.id }];
    }
  });

  if (searchParams.q) {
    Object.keys(categories).forEach((categoryId) => {
      if (categories[categoryId].name.toLowerCase().includes(searchParams.q.toLowerCase())) {
        filteredRes[categoryId] = categories[categoryId];
        return;
      }
      const filteredItems = categories[categoryId]?.items?.filter(({ name }) => name.toLowerCase().includes(searchParams.q.toLowerCase()));
      if (filteredItems?.length) {
        filteredRes[categoryId] = { ...categories[categoryId], items: filteredItems };
      }
    })
  } else {
    filteredRes = categories;
  }

  return (<CategoriesList categories={filteredRes} />);
}

export default Home;