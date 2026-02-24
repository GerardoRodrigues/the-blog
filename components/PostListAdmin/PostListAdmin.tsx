import { findAllPostAdmin } from "@/lib/post/queries/admin";

export async function PostListAdmin() {
  const posts = await findAllPostAdmin();

  return (
    <div>
      {posts.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
}
