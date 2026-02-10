import { formatDateTime, formatRelativeDate } from "@/utils/format-dateime";
import { PostHeading } from "../PostHeading/PostHeading";

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
      <time
        className="text-slate-600 block text-sm"
        dateTime={createdAt}
        title={formatRelativeDate(createdAt)}
      >
        {formatDateTime(createdAt)}
      </time>

      <PostHeading as={postHeading} url={postLink}>
        {title}
      </PostHeading>

      <p>{excerpt}</p>
    </div>
  );
}
