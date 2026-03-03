import { useId } from "react";

interface InputCheckboxProps extends React.ComponentProps<"input"> {
  labelText?: string;
  type?: "checkbox";
}

export function InputCheckbox({
  labelText = "",
  type = "checkbox",
  ...rest
}: InputCheckboxProps) {
  const id = useId();

  return (
    <div className="flex gap-3 items-center">
      <input
        {...rest}
        className={`w-4 h-4 outline-none focus:ring-2 focus:ring-blue-500 ${rest.className}`}
        id={id}
        type={type}
      />
      {labelText && (
        <label htmlFor={id} className="text-sm">
          {labelText}
        </label>
      )}
    </div>
  );
}
