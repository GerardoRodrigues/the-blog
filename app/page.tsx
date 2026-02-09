import { PostList } from "@/components/PostsList/PostsList";
import { SpinLoader } from "@/components/SpinLoader/SpinLoader";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div>
      <header className="text-6xl font-bold text-center">Header</header>
      <Suspense fallback={<SpinLoader className="min-h-20" />}>
        <PostList />
      </Suspense>
    </div>
  );
}
