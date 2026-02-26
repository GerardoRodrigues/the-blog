"use cache";

import { postRespository } from "@/repositories/post";
import { cacheTag } from "next/cache";
import { notFound } from "next/navigation";

export async function findAllPublicPostsCached() {
  cacheTag("posts");

  return await postRespository.findAllPublic();
}

export async function findPublicPostBySlugCached(slug: string) {
  cacheTag(`posts-${slug}`);

  const post = await postRespository
    .findBySlugPublic(slug)
    .catch(() => undefined);

  if (!post) notFound();

  return post;
}
