import { postRespository } from "@/repositories/post";
import { cache } from "react";

export const findAllPublicPosts = cache(
  async () => await postRespository.findAllPublic(),
);
