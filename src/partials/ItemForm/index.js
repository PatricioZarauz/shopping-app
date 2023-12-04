'use client'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { itemSchema } from "@/validations";
import { AutoCompleteInput, TextInput } from "@/components/FormInput";
import toast from "react-hot-toast";

const options = ['ejemplo', 'ejemplo 1', 'ejemplo 2', 'ejemplo 3', 'ejemplo 4', 'ejemplo 5', 'ejemplo 6', 'ejemplo 7', 'ejemplo 8', 'ejemplo 9', 'ejemplo 10', 'ejemplo 11', 'ejemplo 12', 'ejemplo 13', 'ejemplo 14']
const parsedOptions = options.map((item) => ({ label: item, value: item }))

const ItemForm = () => {
  const { handleSubmit, control } = useForm({
    mode: 'onChange',
    defaultValues: {
      image: 'https://i.natgeofe.com/k/1d33938b-3d02-4773-91e3-70b113c3b8c7/lion-male-roar.jpg?w=1084.125&h=609',
      name: 'Testing',
      category: 'ejemplo'
    },
    resolver: yupResolver(itemSchema)
  });

  const onSubmit = (data) => {
    console.log('data: ', data);
    toast.success('Successfully created!');
    toast.error('Error created!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-control">
      <TextInput label="Name" control={control} name="name" />
      <AutoCompleteInput options={parsedOptions} label="Category" control={control} name="category" />
      <TextInput label="Image URL" control={control} name="image" />
      <input className="btn btn-primary" type="submit" value="Create" />
    </form>
  );
};

export default ItemForm;