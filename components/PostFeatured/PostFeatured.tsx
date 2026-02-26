import { PostCoverImage } from "../PostCoverImage/PostCoverImage";
import { findAllPublicPostsCached } from "@/lib/post/queries/public";
import { PostSummary } from "../PostSummary/PostSummary";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

export async function PostFeatured() {
  const posts = await findAllPublicPostsCached();

  if (posts.length <= 0)
    return (
      <ErrorMessage contentTitle="Ops!" content="Nenhuma postagem encontrada" />
    );
    
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
