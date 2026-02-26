"use client";

import { deletePostAction } from "@/actions/post/delet-post-action";
import { Dialog } from "@/components/Dialog/Dialog";
import { Trash2Icon } from "lucide-react";
import { useState, useTransition } from "react";

interface DeletePostButtonProps {
  title: string;
  id: string;
}

export function DeletePostButton({ title, id }: DeletePostButtonProps) {
  const [showDialog, setShowDialog] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleClick() {
    setShowDialog(true);
  }

  function handleConfirm() {
    startTransition(async () => {
      const result = await deletePostAction(id);
      setShowDialog(false);

      if (!result.success) {
        alert(result.error);
      }
    });
  }

  return (
    <div>
      <button
        aria-label={`Ao apagar o post: ${title}`}
        title={`Apagar post: ${title}`}
        className="cursor-pointer transition text-red-500 hover:scale-120 hover:text-red-700 disabled:text-slate-300 disabled:cursor-not-allowed"
        onClick={handleClick}
        disabled={isPending}
      >
        <Trash2Icon size={18} />
      </button>

      {showDialog && (
        <Dialog
          title="Apagar post"
          content={`Tem certeza que deseja apagar o post: "${title}" ?`}
          disabled={isPending}
          onCancel={() => setShowDialog(false)}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  );
}
