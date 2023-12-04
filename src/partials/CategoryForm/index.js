'use client'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { categorySchema } from "@/validations";
import { TextInput, ColorInput } from "@/components/FormInput";
import toast from "react-hot-toast";

const CategoryForm = () => {
  const { handleSubmit, control } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: 'Testing Category',
      color: ''
    },
    resolver: yupResolver(categorySchema)
  });

  const onSubmit = (data) => {
    console.log('data: ', data);
    toast.success('Successfully created!');
    toast.error('Error created!');
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