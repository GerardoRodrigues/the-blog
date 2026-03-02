import { Button } from "@/components/Button/Button";

export default function AdminPostNewPage() {
  return (
    <div>
      <div className="py-16 flex flex-wrap gap-4 items-center">
        <Button variant="defaut" size="sm">
          Default
        </Button>
        <Button variant="ghost" size="md">
          Ghost
        </Button>
        <Button variant="danger" size="lg">
          Danger
        </Button>
      </div>

      <div className="flex flex-wrap gap-4 items-center">
        <Button variant="defaut" size="sm" disabled>
          Default
        </Button>
        <Button variant="ghost" size="md" disabled>
          Ghost
        </Button>
        <Button variant="danger" size="lg" disabled>
          Danger
        </Button>

        <Button variant="danger" size="lg" className="w-full">
          Danger
        </Button>
      </div>
    </div>
  );
}
