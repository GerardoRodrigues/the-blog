import { InputText } from "@/components/InputText/InputText";

export default function AdminPostNewPage() {
  return (
    <div className="flex flex-col gap-6">
      <InputText labelText="Nome" placeholder="Digite o nome" />

      <InputText labelText="Sobrenome" placeholder="Digite o sobrenome" />

      <InputText disabled labelText="Email" placeholder="Digite o email" />
    </div>
  );
}
