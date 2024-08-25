interface InputProps {
  placeholder?: string;
  type: string;
  variant?: string;
  className?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}
export const Input = ({
  placeholder,
  type = "text",
  className,
  variant = "default",
  startIcon,
  endIcon,
  ...rest
}: InputProps) => {
  const baseClasses = `py-2 px-4 rounded-md`;

  const variantClasses: { [key: string]: string } = {
    default:
      "border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent",
    outlined:
      "border-2 border-blue-500 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
    filled: "bg-gray-100 border-none focus:ring-2 focus:ring-blue-500",
  };
  return (
    <>
      <div className="flex items-center">
        {startIcon && <span className="mr-2">{startIcon}</span>}
        <input
          className={`${baseClasses} ${
            variantClasses[variant] || ""
          } ${className}`}
          placeholder={placeholder}
          type={type}
          {...rest}
        />
        {endIcon && <span className="ml-2">{endIcon}</span>}
      </div>
    </>
  );
};
