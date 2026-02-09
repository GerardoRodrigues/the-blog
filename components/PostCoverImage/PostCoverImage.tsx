import Link from "next/link";
import Image from "next/image";

interface PostCoverImageProps {
  href: string;
  alt: string;
  src: string;
}

export function PostCoverImage({ href, alt, src }: PostCoverImageProps) {
  return (
    <Link className="w-full h-full overflow-hidden rounded-2xl" href={href}>
      <Image
        className="w-full h-full object-cover object-center group-hover:scale-105 transition"
        src={src}
        alt={alt}
        width={1200}
        height={720}
        priority
      />
    </Link>
  );
}
