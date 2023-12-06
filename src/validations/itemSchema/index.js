import * as yup from 'yup';
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import hash from 'md5';

const validateUniqueItemName = async (name) => {
  const id = hash(name);
  const docSnap = await getDoc(doc(db, "items", id));

  return !docSnap.exists();
}

export default yup.object({
  name: yup.string().required('The name is required').test('validateUniqueItemName', 'Name already being used, enter a new one', validateUniqueItemName),
  categoryId: yup.string().required('The category is required'),
  image: yup.string().required('The image URL is required').url('Please enter a valid URL'),
}).required();