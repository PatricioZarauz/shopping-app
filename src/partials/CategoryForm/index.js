'use client'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { categorySchema } from "@/validations";
import { TextInput, ColorInput } from "@/components/FormInput";
import toast from "react-hot-toast";
import { setDoc, doc } from "firebase/firestore";
import { db } from "@/firebase";
import hash from 'md5';

const CategoryForm = () => {
  const { handleSubmit, control, reset } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      labelColor: '#A3A3A3'
    },
    resolver: yupResolver(categorySchema)
  });

  const onSubmit = async (data) => {
    try {
      const id = hash(data.name);
      await setDoc(doc(db, "categories", id), data)
      toast.success(`Successfully created "${data.name}" category!`);
      reset();
    } catch (e) {
      toast.error('Sorry an error ocurred, please try again later');
      console.error("Error adding category: ", e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-control">
      <TextInput label="Name" control={control} name="name" />
      <ColorInput label="Label Color" control={control} name="labelColor" />
      <input className="btn btn-primary" type="submit" value="Create" />
    </form>
  );
};

export default CategoryForm;