import { findPostBySlugCached } from "@/lib/post/queries";
import { PostModel } from "@/models/post/post-model";
import { Metadata } from "next";

interface PostSlugPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post: PostModel = await findPostBySlugCached(slug);
  
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

  const post: PostModel = await findPostBySlugCached(slug);

  return (
    <div>
      <h1>Post: {post.content}</h1>
    </div>
  );
}
