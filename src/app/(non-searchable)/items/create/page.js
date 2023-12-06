import ItemForm from "@/partials/ItemForm";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

const ItemsCreate = async () => {
  let categories = [];

  const qs = await getDocs(collection(db, 'categories'));
  qs.forEach((doc) => {
    categories.push({ value: doc.id, label: doc.data().name })
  });

  return (<ItemForm categories={categories} />);
};

export default ItemsCreate;