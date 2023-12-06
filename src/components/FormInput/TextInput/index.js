'use client'

import { cn } from "@/lib/utils";
import { Controller } from "react-hook-form";

const TextInput = ({ label, control, name }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
        <label className="form-control w-full">
          <div className="label">
            <span className={cn("label-text font-bold", { 'text-error': invalid })}>{label}</span>
          </div>
          <input type="text" placeholder={label} value={value || ''} onChange={onChange} className={cn("input input-bordered", { 'input-error': invalid })} />
          <div className="label">
            <span className="label-text-alt text-error">{error?.message}</span>
          </div>
        </label>
      )}
    />
  );
};

export default TextInput;