import * as yup from 'yup';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

const validateUniqueCategoryName = async (name) => {
  let isUnique = true;

  const querySnapshot = await getDocs(query(collection(db, 'categories'), where('name', '==', name)));
  querySnapshot.forEach(() => {
    isUnique = false;
  });

  return isUnique;
}

export default yup.object({
  name: yup.string().required('The name is required').test('validateUniqueCategoryName', 'Name already being used, enter a new one', validateUniqueCategoryName),
  labelColor: yup.string().trim().matches(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i, 'The color must be a valid hex value').required('The color is required')
}).required();