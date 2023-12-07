import * as yup from 'yup';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

const validateUniqueItemName = async (name) => {
  let isUnique = true;

  const querySnapshot = await getDocs(query(collection(db, 'items'), where('name', '==', name)));
  querySnapshot.forEach(() => {
    isUnique = false;
  });

  return isUnique;
}

export default yup.object({
  name: yup.string().required('The name is required').test('validateUniqueItemName', 'Name already being used, enter a new one', validateUniqueItemName),
  categoryId: yup.string().required('The category is required'),
  image: yup.string().required('The image URL is required').url('Please enter a valid URL'),
}).required();