"use server";

import { postRespository } from "@/repositories/post";
import { asyncDelay } from "@/utils/async-delay";
import { logColor } from "@/utils/log-color";
import { revalidateTag } from "next/cache";

export async function deletePostAction(id: string) {
  await asyncDelay(3000);
  logColor("deletePostAction", id);

  if (!id || typeof id !== "string") {
    return {
      success: false,
      error: "Dados inválidos",
    };
  }

  const post = await postRespository.findById(id).catch(() => undefined);

  if (!post)
    return {
      success: false,
      error: "Post não encontrado",
    };

  await postRespository.deletePostById(id);

  revalidateTag("posts", "default");
  revalidateTag(`posts-${post.slug}`, "default");

  return {
    success: true,
    error: "",
  };
}
