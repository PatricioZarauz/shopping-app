'use client'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { itemSchema } from "@/validations";
import { AutoCompleteInput, TextInput } from "@/components/FormInput";
import toast from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase";
import LoadingButton from "@/components/LoadingButton";

const ItemForm = ({ categories }) => {
  const { reset, handleSubmit, control, formState: { isSubmitting } } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      favorite: false,
      favDate: null,
      categoryId: null
    },
    resolver: yupResolver(itemSchema)
  });

  const onSubmit = async (data) => {
    const { categoryId, ...item } = data;
    try {
      await addDoc(collection(db, "items"), data);
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
      <LoadingButton isLoading={isSubmitting} styleProp="btn-primary" type="submit" content="Create" />
    </form>
  );
};

export default ItemForm;