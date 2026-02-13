"use client";

import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage";
import { useEffect } from "react";

interface ErrorMessageProps {
  error: Error;
  reset: () => void;
}

export default function RootErrorPage({ error }: ErrorMessageProps) {
  useEffect(() => console.log(error), [error]);

  return (
    <ErrorMessage
      title="Internal Server Error"
      contentTitle="501"
      content="Desculpe, ocorreu um erro interno no servidor. Tente novamente mais tarde."
    />
  );
}
