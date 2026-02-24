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

// export const findAllPublicPostsCached = unstable_cache(
//   cache(async () => {
//     return await postRespository.findAllPublic();
//   }),
//   ["posts"],
//   {
//     tags: ["posts"],
//   },
// );

// export const findPostBySlugCached = (slug: string) =>
//   unstable_cache(
//     cache(async (slug: string) => {
//       const post = await postRespository
//         .findBySlugPublic(slug)
//         .catch(() => undefined);
//       if (!post) notFound();
//       return post;
//     }),
//     ["posts"],
//     {
//       tags: [`posts-${slug}`],
//     },
//   )(slug);


