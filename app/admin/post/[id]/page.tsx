interface AdminPostIdPageProps {
  params: Promise<{ id: string }>;
}

export default async function AdminPostIdPage({ params }: AdminPostIdPageProps) {
  return (
    <div>
      <h1>Admin Post Id</h1>
    </div>
  );
}
