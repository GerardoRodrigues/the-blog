import { MenuAdmin } from "@/components/admin/MenuAdmin/MenuAdmin";

interface AdminPostLaytoutProps {
  children: React.ReactNode;
}

export default function AdminPostLaytout({ children }: AdminPostLaytoutProps) {
  return (
    <>
      <MenuAdmin />
      {children}
    </>
  );
}
