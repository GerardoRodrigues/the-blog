import Link from "next/link";

interface PostHeadingProps {
  children: React.ReactNode;
  url: string;
  as: "h1" | "h2";
}

export function PostHeading({ children, url, as: Tag }: PostHeadingProps) {
  return (
    <Tag className="text-2xl/tight font-extrabold sm:text-4xl/tight">
      <Link href={url}>{children}</Link>
    </Tag>
  );
}
