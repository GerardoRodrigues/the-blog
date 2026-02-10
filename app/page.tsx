import { Container } from "@/components/Container/Container";
import { Header } from "@/components/Header/Header";
import { PostList } from "@/components/PostsList/PostsList";
import { SpinLoader } from "@/components/SpinLoader/SpinLoader";
import { Suspense } from "react";
import { PostFeatured } from "@/components/PostFeatured/PostFeatured";

export default async function Home() {
  return (
    <Container>
      <Header />

      <Suspense fallback={<SpinLoader className="min-h-20" />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<SpinLoader className="min-h-20" />}>
        <PostList />
      </Suspense>
    </Container>
  );
}
