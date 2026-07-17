import {
  InputHTMLAttributes,
  ReactNode,
  useState,
  ChangeEvent,
  FocusEvent,
} from "react";
import {
  applyMask,
  normalizeWebsite,
  normalizeEmail,
  MaskType,
} from "@/utils/maskInput";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactNode;
  error?: string;
  mask?: MaskType;
  normalize?: "website" | "email";
}

export function Input({
  label,
  icon,
  error,
  className = "",
  mask,
  normalize,
  onChange,
  onBlur,
  value,
  defaultValue,
  required,
  ...props
}: InputProps) {
  // Estado interno só entra em jogo se o componente não for controlado por fora
  const [internalValue, setInternalValue] = useState(
    (value ?? defaultValue ?? "") as string,
  );

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let nextValue = e.target.value;

    if (mask) {
      nextValue = applyMask(mask, nextValue);
    }

    if (!isControlled) {
      setInternalValue(nextValue);
    }

    // Repassa pro onChange do pai já com o valor mascarado
    onChange?.({
      ...e,
      target: { ...e.target, value: nextValue },
    } as ChangeEvent<HTMLInputElement>);
  }

  function handleBlur(e: FocusEvent<HTMLInputElement>) {
    if (normalize) {
      const normalizer =
        normalize === "website" ? normalizeWebsite : normalizeEmail;
      const normalized = normalizer(e.target.value);

      if (!isControlled) {
        setInternalValue(normalized);
      }

      onChange?.({
        ...e,
        target: { ...e.target, value: normalized },
      } as ChangeEvent<HTMLInputElement>);
    }

    onBlur?.(e);
  }

  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <label
          htmlFor={props.id}
          className="text-sm font-medium text-slate-700"
        >
          {label} {required && <span className="text-sm text-red-500">*</span>}
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
          value={currentValue}
          onChange={handleChange}
          onBlur={handleBlur}
          required={required}
          className={`
            h-11 w-full rounded-xl border border-slate-200 bg-white
            ${icon ? "pl-11" : "px-4"}
            pr-4 text-sm text-slate-900
            placeholder:text-slate-400
            outline-none transition-all duration-200
            focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100
            ${error && "border-red-500 focus:border-red-500"}
            ${className}
          `}
        />
      </div>

      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
