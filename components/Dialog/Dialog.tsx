interface DialogProps {
  title: string;
  content: React.ReactNode;
  disabled: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export function Dialog({
  title,
  content,
  disabled,
  onConfirm,
  onCancel,
}: DialogProps) {
  function handleCancel() {
    if (disabled) return;
    onCancel();
  }

  return (
    <div
      onClick={handleCancel}
      className="fixed inset-0 bg-black/55 backdrop-blur-xs flex items-center justify-center"
    >
      <div
        role="dialog"
        aria-modal={true}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        className="bg-slate-100 p-6 rounded-lg max-w-2xl mx-6 flex flex-col gap-6 shadow-lg shadow-black/30 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 id="dialog-title" className="text-xl font-extrabold">
          {title}
        </h3>
        <div id="dialog-description">{content}</div>
        <div className="flex items-center justify-around">
          <button
            autoFocus
            className="cursor-pointer bg-slate-300 hover:bg-slate-400 rounded-lg transition text-slate-950 px-4 py-2 flex items-center justify-center 
            disabled:bg-slate-300 disabled:text-slate-100 disabled:cursor-not-allowed"
            onClick={handleCancel}
            disabled={disabled}
          >
            Cancelar
          </button>
          <button
            className="cursor-pointer bg-blue-500 hover:bg-blue-600 rounded-lg transition text-blue-50 px-4 py-2 flex items-center justify-center 
            disabled:bg-slate-300 disabled:text-slate-100 disabled:cursor-not-allowed"
            onClick={onConfirm}
            disabled={disabled}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}
