import { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: {
    label: string;
    value: string;
  }[];
}

export function Select({
  label,
  options,
  className = "",
  error,
  ...props
}: SelectProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <label
          htmlFor={props.id}
          className="text-sm font-medium text-slate-700"
        >
          {label}
        </label>
      )}

      <div className="relative">
        <select
          {...props}
          className={`
            h-11 w-full appearance-none rounded-xl
            border border-slate-200 bg-white
            px-4 pr-10
            text-sm text-slate-900
            outline-none
             ${error && "border-red-500 focus:border-red-500"}
            transition-all duration-200
            focus:border-indigo-500
            focus:ring-4 focus:ring-indigo-100
            disabled:cursor-not-allowed
            disabled:bg-slate-100
            ${className}
          `}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={18}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
      </div>
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
