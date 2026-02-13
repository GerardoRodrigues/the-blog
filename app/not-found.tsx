import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage";

export default function NotFoundPage() {
  return (
    <ErrorMessage
      title="Página não encontrada"
      contentTitle="404"
      content="Desculpe, essa página não foi encontrada."
    />
  );
}
