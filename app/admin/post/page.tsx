import { PostListAdmin } from "@/components/admin/PostListAdmin/PostListAdmin";
import { SpinLoader } from "@/components/SpinLoader/SpinLoader";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Post Admin",
};

export default function AdminPostPage() {
  return (
    <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
      <PostListAdmin />
    </Suspense>
  );
}
