'use client'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { itemSchema } from "@/validations";
import { AutoCompleteInput, TextInput } from "@/components/FormInput";
import toast from "react-hot-toast";
import { setDoc, doc } from "firebase/firestore";
import { db } from "@/firebase";
import hash from 'md5';

const ItemForm = ({ categories }) => {
  const { reset, handleSubmit, control } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(itemSchema)
  });

  const onSubmit = async (data) => {
    const { categoryId, ...item } = data;
    try {
      const id = hash(item.name);
      await setDoc(doc(db, "items", id), { name: item.name });
      await setDoc(doc(db, "categories", categoryId, "items", id), item)
      toast.success(`Successfully created "${item.name}" item!`);
      reset();
    } catch (e) {
      toast.error('Sorry an error ocurred, please try again later');
      console.error("Error adding item: ", e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-control">
      <TextInput label="Name" control={control} name="name" />
      <AutoCompleteInput options={categories} label="Category" control={control} name="categoryId" />
      <TextInput label="Image URL" control={control} name="image" />
      <input className="btn btn-primary" type="submit" value="Create" />
    </form>
  );
};

export default ItemForm;