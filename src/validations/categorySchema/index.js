import * as yup from 'yup';
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import hash from 'md5';

const validateUniqueCategoryName = async (name) => {
  const id = hash(name);
  const docSnap = await getDoc(doc(db, "categories", id));

  return !docSnap.exists();
}

export default yup.object({
  name: yup.string().required('The name is required').test('validateUniqueCategoryName', 'Name already being used, enter a new one', validateUniqueCategoryName),
  labelColor: yup.string().trim().matches(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i, 'The color must be a valid hex value').required('The color is required')
}).required();