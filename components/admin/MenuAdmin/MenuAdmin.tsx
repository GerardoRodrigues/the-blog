"use client";

import { CircleXIcon, FileTextIcon, HouseIcon, MenuIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function MenuAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [pathName]);

  const navClasses =
    "flex flex-col bg-slate-900 text-slate-100 rounded-lg mb-8 sm:flex-row sm:flex-wrap sm:overflow-visible sm:h-auto";
  const linkClasses =
    "flex items-center justify-start gap-2 px-4 rounded-lg cursor-pointer transition hover:bg-slate-800 h-10 shrink-0";
  const closeOpenBtnClases = `${linkClasses} text-blue-200 italic sm:hidden`;

  return (
    <nav className={`${navClasses} ${!isOpen ? "h-10 overflow-hidden" : ""}`}>
      <button onClick={() => setIsOpen(!isOpen)} className={closeOpenBtnClases}>
        {!isOpen && (
          <>
            <MenuIcon size={16} />
            Menu
          </>
        )}

        {isOpen && (
          <>
            <CircleXIcon size={16} />
            Fechar
          </>
        )}
      </button>

      <a className={linkClasses} href="/" target="_blank">
        <HouseIcon size={16} />
        Home
      </a>

      <Link className={linkClasses} href="/admin/post">
        <FileTextIcon size={16} />
        Posts
      </Link>

      <Link className={linkClasses} href="/admin/post/new">
        <PlusIcon size={16} />
        Criar post
      </Link>
    </nav>
  );
}
