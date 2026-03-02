type ButtonVariants = "defaut" | "ghost" | "danger";
type ButtonSizes = "sm" | "md" | "lg";

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: ButtonVariants;
  size?: ButtonSizes;
}

export function Button({
  variant = "defaut",
  size = "md",
  ...rest
}: ButtonProps) {
  const buttonVariants: Record<ButtonVariants, string> = {
    defaut: "bg-blue-600 hover:bg-blue-700 text-blue-100",
    ghost: "bg-slate-300 hover:bg-slate-400 text-slate-950",
    danger: "bg-red-600 hover:bg-red-700 text-red-100",
  };

  const buttonSizes: Record<ButtonSizes, string> = {
    sm: "text-xs/tight py-1 px-2 rounded-sm [&_svg]:w-3 [&_svg]:h-3 gap-1",
    md: "text-base/tight py-2 px-4 rounded-md [&_svg]:w-4 [&_svg]:h-4 gap-2",
    lg: "text-lg/tight py-4 px-6 rounded-lg [&_svg]:w-5 [&_svg]:h-5 gap-3",
  };

  const buttonClasses = `${buttonVariants[variant]} ${buttonSizes[size]} cursor-pointer flex items-center justify-center transition disabled:cursor-not-allowed  disabled:bg-slate-200 disabled:text-slate-400 ${rest.className}`;

  return <button {...rest} className={buttonClasses} />;
}
