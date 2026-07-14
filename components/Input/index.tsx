import { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactNode;
  error?: string;
}

export function Input({
  label,
  icon,
  error,
  className = "",
  ...props
}: InputProps) {
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
        {icon && (
          <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </div>
        )}

        <input
          {...props}
          className={`
            h-11 w-full rounded-xl border border-slate-200 bg-white
            ${icon ? "pl-11" : "px-4"}
            pr-4 text-sm text-slate-900
            placeholder:text-slate-400
            outline-none transition-all duration-200
            focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100
            ${className}
          `}
        />
      </div>

      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
