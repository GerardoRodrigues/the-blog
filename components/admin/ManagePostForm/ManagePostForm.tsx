"use client";

import { Button } from "@/components/Button/Button";
import { InputCheckbox } from "@/components/InputCheckbox/InputCheckbox";
import { InputText } from "@/components/InputText/InputText";
import { MarkdownEditor } from "@/components/MarkdownEditor/MarkdownEditor";
import { useState } from "react";

export function ManagePostForm() {
  const [contentValue, setContentValue] = useState("");

  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText labelText="Nome" placeholder="Digite o nome" />

        <InputText labelText="Sobrenome" placeholder="Digite o sobrenome" />

        <InputText disabled labelText="Email" placeholder="Digite o email" />

        <MarkdownEditor
          labelText="Conteúdo"
          textAreaName="content"
          value={contentValue}
          setValue={setContentValue}
        />

        <InputCheckbox labelText="Aceito os termos" />
      </div>

      <div className="mt-6">
        <Button type="submit">Enviar</Button>
      </div>
    </form>
  );
}
