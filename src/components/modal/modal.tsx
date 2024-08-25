import React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean; // Modal ochiq yoki yopiqligini aniqlash
  onClose: () => void; // Modalni yopish funksiyasi
  title?: string; // Modal sarlavhasi
  children: React.ReactNode; // Modal kontenti
  footer?: React.ReactNode; // Modalning footer qismi
  fullWidth?: boolean; // To'liq kenglikda modal
  size?: "small" | "medium" | "large"; // Modal hajmi
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  fullWidth = false,
  size = "medium",
}) => {
  if (!isOpen) return null;

  const sizeClasses = {
    small: "max-w-sm",
    medium: "max-w-md",
    large: "max-w-lg",
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className={`bg-white rounded-lg shadow-lg overflow-hidden w-full ${
          fullWidth ? "w-full" : sizeClasses[size]
        }`}
      >
        <div className="p-4 border-b">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
          ></button>
        </div>
        <div className="p-4">{children}</div>
        {footer && <div className="p-4 border-t">{footer}</div>}
      </div>
    </div>,
    document.getElementById("root") as HTMLElement
  );
};
