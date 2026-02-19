import { DrizzlePostRepository } from "./drizzle-post-repository";
import { PostRepository } from "./post-repository";

export const postRespository: PostRepository = new DrizzlePostRepository();