import { postRespository } from "@/repositories/post";

export async function PostList() {
  const posts = await postRespository.findAll();
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </div>
  );
}
