"use cache";

import { postRespository } from "@/repositories/post";
import { cache } from "react";

export const findPostByIdAdmin = cache(async (id: string) => {
  return await postRespository.findById(id);
});

export const findAllPostAdmin = cache(async () => {
  return await postRespository.findAll();
});
