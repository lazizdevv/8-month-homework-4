interface ButtonProps {
  children: string;
  // onClick:void,
  type?: "submit" | "button";
  variant?: string;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  startIcon?: React.ReactNode; // Boshida ko'rsatiladigan ikonka
  endIcon?: React.ReactNode; // Oxirida ko'rsatiladigan ikonka
  fullWidth?: boolean; // Tugmani to'liq kenglikda qilish
  loading?: boolean; // Yuklanish belgisi uchun
  disabled?: boolean; // Tugmani o'chirish
}

export const Button = ({
  children,
  type,
  variant = "primary",
  startIcon,
  endIcon,
  fullWidth = false,
  loading = false,
  disabled = false,
  className,
  ...rest
}: ButtonProps) => {
  const baseClasses = `py-2 px-4 rounded-md font-semibold transition ease-in-out duration-300 ${
    fullWidth ? "w-full" : ""
  }`;

  const variantClasses: { [key: string]: string } = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    success: "bg-green-500 text-white hover:bg-green-600",
  };
  return (
    <button
      className={`${baseClasses} ${
        variantClasses[variant] || ""
      } ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? (
        <span className="loader mr-2"></span>
      ) : (
        <>
          {startIcon && <span className="mr-2">{startIcon}</span>}
          {children}
          {endIcon && <span className="ml-2">{endIcon}</span>}
        </>
      )}
    </button>
  );
};
