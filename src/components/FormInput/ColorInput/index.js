'use client'

import { cn } from "@/lib/utils";
import { Controller } from "react-hook-form";

const ColorInput = ({ label, control, name }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
        <div className="form-control w-full">
          <div className="label">
            <span className={cn("label-text font-bold", { 'text-error': invalid })}>{label}</span>
          </div>
          <div className="flex gap-2">
            <div className="flex-none">
              <input
                type="color"
                value={value}
                onChange={onChange}
                className="w-12 h-12 cursor-pointer"
              />
            </div>
            <div className="shrink w-32">
              <input
                type="text"
                placeholder="Label Color"
                value={value}
                onChange={onChange}
                className={cn("input input-bordered h-12 w-full", { 'input-error': invalid })}
              />
            </div>
          </div>
          <div className="label">
            <span className="label-text-alt text-error">{error?.message}</span>
          </div>
        </div>
      )}
    />
  );
};

export default ColorInput;