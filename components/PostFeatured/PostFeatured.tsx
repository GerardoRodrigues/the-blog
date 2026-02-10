import { PostCoverImage } from "../PostCoverImage/PostCoverImage";
import { PostHeading } from "../PostHeading/PostHeading";

export function PostFeatured() {
  const slug = "título-dinâmico";
  const postLink = `/post/${slug}`;
  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        href="#"
        alt="Título dinâmico"
        src="/images/bryen_3.png"
      />
      <div className="flex flex-col gap-4 sm:justify-center">
        <time className="text-slate-600 block text-sm" dateTime="2025-02-22">
          22/02/2025 - 12:00
        </time>
        <PostHeading as="h1" url={postLink}>
          Título dinâmico
        </PostHeading>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint quis,
          id cumque eum dolorem provident? Consequatur voluptas temporibus,
          reiciendis, veritatis veniam sint eveniet ullam nam officiis
          consequuntur sapiente esse. Expedita?
        </p>
      </div>
    </section>
  );
}
