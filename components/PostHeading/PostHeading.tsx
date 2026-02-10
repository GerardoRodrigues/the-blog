import Link from "next/link";

interface PostHeadingProps {
  children: React.ReactNode;
  url: string;
  as: "h1" | "h2";
}

export function PostHeading({ children, url, as: Tag }: PostHeadingProps) {
  return (
    <Tag
      className={`${Tag === "h1" ? "text-2xl/tight font-extrabold sm:text-4xl/tight" : "text-2xl/tight sm:font-bold"}`}
    >
      <Link className="hover:text-slate-600" href={url}>{children}</Link>
    </Tag>
  );
}
