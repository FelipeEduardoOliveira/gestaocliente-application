"use client";

import { X } from "lucide-react";
import { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  onClose: () => void;
  width?: string;
}

export default function Modal({
  open,
  title,
  children,
  footer,
  onClose,
  width = "max-w-[560px]",
}: ModalProps) {
  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/40
        backdrop-blur-sm
      "
    >
      <div
        className={`
          w-full
          ${width}
          rounded-2xl
          bg-white
          shadow-xl
        `}
      >
        {/* Header */}
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            px-6
            py-5
          "
        >
          <h2
            className="
              text-lg
              font-semibold
              text-slate-800
            "
          >
            {title}
          </h2>

          <button
            onClick={onClose}
            className="
              text-slate-400
              hover:text-slate-600
              cursor-pointer
            "
          >
            <X size={22} />
          </button>
        </div>

        {/* Content */}
        <div>{children}</div>

        {/* Footer */}
        {footer && (
          <div
            className="
              border-t
              px-6
              py-4
            "
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
