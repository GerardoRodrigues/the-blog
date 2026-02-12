import { PostHeading } from "../PostHeading/PostHeading";
import { PostDate } from "../PostDate/PostDate";

interface PostSummaryProps {
  postLink: string;
  postHeading: "h1" | "h2";
  createdAt: string;
  title: string;
  excerpt: string;
}

export function PostSummary({
  createdAt,
  title,
  excerpt,
  postLink,
  postHeading,
}: PostSummaryProps) {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <PostDate date={createdAt} />

      <PostHeading as={postHeading} url={postLink}>
        {title}
      </PostHeading>

      <p>{excerpt}</p>
    </div>
  );
}
