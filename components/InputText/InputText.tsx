import { useId } from "react";

interface InputTextProps extends React.ComponentProps<"input"> {
  labelText?: string;
}

export function InputText({ labelText = "", ...rest }: InputTextProps) {
  const id = useId();

  return (
    <div className="flex flex-col gap-2">
      {labelText && (
        <label className="text-sm" htmlFor={id}>
          {labelText}
        </label>
      )}
      <input
        {...rest}
        className={`bg-white outline-0 text-base/tight ring-2 ring-slate-400 rounded p-2 focus:ring-blue-600 placeholder-slate-300
         disabled:bg-slate-200 disabled:placeholder-slate-300 disabled:text-slate-400 read-only:bg-slate-100 ${rest.className}`}
        id={id}
      />
    </div>
  );
}
