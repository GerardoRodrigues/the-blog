import { PostCoverImage } from "../PostCoverImage/PostCoverImage";
import { PostSummary } from "../PostSummary/PostSummary";
import { findAllPublicPostsCached } from "@/lib/post/queries/public";

export async function PostList() {
  const posts = await findAllPublicPostsCached();
  return (
    <div className="grid grid-cols-1 mb-16 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.slice(1).map((post) => {
        const postLink = `/post/${post.slug}`;
        return (
          <div className="flex flex-col gap-4 group" key={post.id}>
            <PostCoverImage
              href={postLink}
              alt={post.title}
              src={post.coverImageUrl}
            />

            <PostSummary
              createdAt={post.createdAt}
              excerpt={post.excerpt}
              postHeading="h2"
              postLink={postLink}
              title={post.title}
            />
          </div>
        );
      })}
    </div>
  );
}
