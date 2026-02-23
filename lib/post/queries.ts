import { postRespository } from "@/repositories/post";
import { cacheTag } from "next/cache";
import { notFound } from "next/navigation";
import { cache } from "react";

export async function findAllPublicPostsCached() {
  "use cache";
  cacheTag("posts");
  return await postRespository.findAllPublic();
}

export async function findPostBySlugCached(slug: string) {
  "use cache";
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

export const findPostByIdCached = cache(
  async (id: string) => await postRespository.findById(id),
);
