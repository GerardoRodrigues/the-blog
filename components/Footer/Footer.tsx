import { cacheLife } from "next/cache";
import Link from "next/link";

export async function getYear() {
  "use cache";

  const now = new Date();
  const endOfYear = new Date(now.getFullYear() + 1, 0, 1);
  const secondsUntilNewYear = Math.floor(
    (endOfYear.getTime() - now.getTime()) / 1000,
  );

  cacheLife({
    stale: secondsUntilNewYear,
  });

  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getYear();
  return (
    <footer className="pb-16 text-center">
      <p>
        <span>Copyright &copy; {year} - </span>
        <Link href="/">The Blog</Link>
      </p>
    </footer>
  );
}
