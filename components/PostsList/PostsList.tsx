import { postRespository } from "@/repositories/post";
import { PostCoverImage } from "../PostCoverImage/PostCoverImage";
import { PostHeading } from "../PostHeading/PostHeading";

export async function PostList() {
  const posts = await postRespository.findAll();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => {
        const postLink = post.coverImageUrl;
        return (
          <div className="flex flex-col gap-4 group" key={post.id}>
            <PostCoverImage
              href={postLink}
              alt={post.title}
              src={post.coverImageUrl}
            />

            <div className="flex flex-col gap-4 sm:justify-center">
              <time
                className="text-slate-600 block text-sm"
                dateTime={post.createdAt}
              >
                {post.createdAt}
              </time>
              <PostHeading as="h2" url={postLink}>
                {post.title}
              </PostHeading>
              <p>{post.excerpt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
