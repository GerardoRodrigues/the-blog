import { findAllPostAdmin } from "@/lib/post/queries/admin";
import Link from "next/link";
import { DeletePostButton } from "../admin/DeletePostButton/DeletePostButton";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

export async function PostListAdmin() {
  const posts = await findAllPostAdmin();

  if (posts.length <= 0)
    return (
      <ErrorMessage contentTitle="Ops!" content="Nenhuma postagem encontrada" />
    );

  return (
    <div className="mb-16">
      {posts.map((post) => {
        const classes = !post.published ? "bg-slate-300" : "";
        return (
          <div
            className={`p-2 ${classes} flex gap-2 items-center justify-between`}
            key={post.id}
          >
            <Link href={`/admin/post/${post.id}`}>{post.title}</Link>
            {!post.published && (
              <span className="text-sm text-slate-600 italic">
                (Não publicado)
              </span>
            )}

            <DeletePostButton title={post.title} id={post.id} />
          </div>
        );
      })}
    </div>
  );
}
