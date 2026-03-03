import { Button } from "@/components/Button/Button";
import { InputCheckbox } from "@/components/InputCheckbox/InputCheckbox";
import { InputText } from "@/components/InputText/InputText";

export default function AdminPostNewPage() {
  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText labelText="Nome" placeholder="Digite o nome" />

        <InputText labelText="Sobrenome" placeholder="Digite o sobrenome" />

        <InputText disabled labelText="Email" placeholder="Digite o email" />

        <InputCheckbox labelText="Aceito os termos" />
      </div>

      <div className="mt-6">
        <Button type="submit">Enviar</Button>
      </div>
    </form>
  );
}
