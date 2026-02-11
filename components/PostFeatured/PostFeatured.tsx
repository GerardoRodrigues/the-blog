import { PostCoverImage } from "../PostCoverImage/PostCoverImage";
import { findAllPublicPostsCached } from "@/lib/post/queries";
import { PostSummary } from "../PostSummary/PostSummary";

export async function PostFeatured() {
  const posts = await findAllPublicPostsCached();
  const post = posts[0];
  const postLink = `/post/${post.slug}`;
  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        href={postLink}
        alt={post.title}
        src={post.coverImageUrl}
      />

      <PostSummary
        createdAt={post.createdAt}
        excerpt={post.excerpt}
        title={post.title}
        postLink={postLink}
        postHeading="h1"
      />
    </section>
  );
}
