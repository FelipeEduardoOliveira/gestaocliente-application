import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export function Button({
  children,
  loading = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`
        inline-flex h-11 items-center justify-center gap-2
        rounded-xl bg-indigo-600 px-5
        text-sm font-medium text-white
        shadow-sm
        transition-all duration-200
        hover:bg-indigo-700
        hover:shadow-md
        hover:cursor-pointer
        active:scale-[0.98]
        focus:outline-none
        focus:ring-4 focus:ring-indigo-200
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${className}
      `}
    >
      {loading && (
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      )}

      {children}
    </button>
  );
}
