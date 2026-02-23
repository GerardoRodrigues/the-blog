import { SinglePost } from "@/components/SinglePost/SinglePost";
import { SpinLoader } from "@/components/SpinLoader/SpinLoader";
import { findPostBySlugCached } from "@/lib/post/queries";
import { PostModel } from "@/models/post/post-model";
import { Metadata } from "next";
import { Suspense } from "react";

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
  return (
    <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
      <SinglePost params={params} />
    </Suspense>
  );
}
