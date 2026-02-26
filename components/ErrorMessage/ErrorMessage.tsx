"use client";

interface ErrorMessageProps {
  title?: string;
  contentTitle: string;
  content: React.ReactNode;
}

export function ErrorMessage({
  content,
  contentTitle,
  title = "",
}: ErrorMessageProps) {
  return (
    <>
      {title && <title>{title}</title>}
      <div className="min-h-80 flex items-center justify-center bg-slate-900 text-slate-100 p-8 rounded-2xl text-center mb-16">
        <div>
          <h1 className="text-7xl/tight font-extrabold mb-4">{contentTitle}</h1>
          <div>{content}</div>
        </div>
      </div>
    </>
  );
}
