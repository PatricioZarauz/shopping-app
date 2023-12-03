'use client'

import Select from "react-select";
import { cn } from "@/lib/utils";
import { Controller } from "react-hook-form";

const AutoCompleteInput = ({ options, label, control, name }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
        <label className="form-control w-full">
          <div className="label">
            <span className={cn("label-text", { 'text-error': invalid })}>{label}</span>
          </div>
          <Select
            instanceId={`${name}-selector`}
            options={options}
            value={options.find((o) => o.value === value)}
            onChange={(val) => onChange(val && val.value)}
            unstyled
            styles={{
              control: ({ outline, ...base }) => base,
              menuList: ({ maxHeight, ...base }) => base
            }}
            classNames={{
              control: ({ isFocused }) =>
                cn("input input-bordered text-base",
                  {
                    'border-[var(--fallback-bc,oklch(var(--bc)/0.2))] outline-none': isFocused,
                    'input-error': invalid
                  }),
              placeholder: () => "text-base text-gray-400",
              option: ({ isFocused, isSelected }) =>
                cn("hover:cursor-pointer px-3 py-2 rounded",
                  {
                    'bg-gray-100': isFocused,
                    'after:ml-2 bg-gray-200 hover:bg-gray-100': isSelected
                  }),
              menu: () => "p-1 mt-2 border border-gray-200 bg-white rounded-lg",
              menuList: () => "max-h-36"
            }}
          />
          <div className="label">
            <span className="label-text-alt text-error">{error?.message}</span>
          </div>
        </label >
      )}
    />
  );
};

export default AutoCompleteInput;