import { JsonPostRepository } from "@/repositories/post/json-post-repository";
import { drizzleDb } from ".";
import { postsTable } from "./schemas";

(async () => {
  const jsonPostRepository = new JsonPostRepository();
  const posts = await jsonPostRepository.findAll();

  try {
    await drizzleDb.delete(postsTable); //APAGA TUDO
    await drizzleDb.insert(postsTable).values(posts);
  } catch (error) {
    console.log("Ocorreu um error...", error);
  }
})();
