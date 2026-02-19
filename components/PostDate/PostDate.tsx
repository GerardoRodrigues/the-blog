import { formatDateTime, formatRelativeDate } from "@/utils/format-datetime";

interface PostDateProps {
  date: string;
}

export function PostDate({ date }: PostDateProps) {
  return (
    <time
      className="text-slate-600 text-sm"
      dateTime={date}
      title={formatRelativeDate(date)}
    >
      {formatDateTime(date)}
    </time>
  );
}
