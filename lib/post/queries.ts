import { postRespository } from "@/repositories/post";
import { notFound } from "next/navigation";
import { cache } from "react";

export const findAllPublicPostsCached = cache(
  async () => await postRespository.findAllPublic(),
);

export const findPostBySlugCached = cache(async (slug: string) => {
  const post = await postRespository.findBySlug(slug).catch(() => undefined);
  if (!post) notFound();
  return post;
});

export const findPostByIdCached = cache(
  async (id: string) => await postRespository.findById(id),
);
