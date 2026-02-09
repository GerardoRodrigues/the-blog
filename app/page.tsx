import { Container } from "@/components/Container/Container";
import { PostList } from "@/components/PostsList/PostsList";
import { SpinLoader } from "@/components/SpinLoader/SpinLoader";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Container>
      <header className="text-6xl font-bold text-center py-8">Header</header>
      <Suspense fallback={<SpinLoader className="min-h-20" />}>
        <PostList />
      </Suspense>
    </Container>
  );
}
