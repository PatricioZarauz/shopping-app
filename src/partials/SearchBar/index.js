'use client'

import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { RiSearchLine } from "react-icons/ri";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const { register, handleSubmit } = useForm({ mode: 'onSubmit', defaultValues: { q: searchParams.get('q') } })
  const router = useRouter();
  const sumbitHandler = ({ q }) => {
    const queryParams = q ? `?${new URLSearchParams({ q })}` : '';
    router.push(`/${queryParams}`)
  }

  return (
    <div className="w-full flex-none md:shrink md:w-fit">
      <form onSubmit={handleSubmit(sumbitHandler)} className="input input-bordered w-full">
        <div className="flex h-full items-center">
          <input type="search" placeholder="Search" {...register("q")} className="w-full" />
          <button type="submit" className="w-fit"><RiSearchLine className="text-xl" /></button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;