import { postRespository } from "@/repositories/post";

export async function findPostByIdAdmin(id: string) {
  return await postRespository.findById(id);
}

export async function findAllPostAdmin() {
  return await postRespository.findAll();
}
