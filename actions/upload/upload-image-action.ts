"use server";

import {
  IMAGE_SERVER_URL,
  IMAGE_UPLOADER_DIRECTORY,
  IMAGE_UPLOADER_MAX_SIZE,
} from "@/lib/consts";
import { mkdir, writeFile } from "fs/promises";
import { extname, resolve } from "path";

interface UploadImageActionResponse {
  url: string;
  error: string;
}

export async function uploadImageAction(
  formData: FormData,
): Promise<UploadImageActionResponse> {
  const makeResult = ({ url = "", error = "" }) => ({ url, error });

  if (!(formData instanceof FormData))
    return makeResult({ error: "Dados inválidos" });

  const file = formData.get("file");

  if (!(file instanceof File)) return makeResult({ error: "Arquivo inválido" });

  if (file.size > IMAGE_UPLOADER_MAX_SIZE)
    return makeResult({ error: "Arquivo muito grande" });

  if (!file.type.startsWith("image/"))
    return makeResult({ error: "Arquivo inválido" });

  const extensionFile = extname(file.name);
  const uniqueFilename = `${Date.now()}${extensionFile}`;

  const fullPath = resolve(process.cwd(), "public", IMAGE_UPLOADER_DIRECTORY);
  await mkdir(fullPath, { recursive: true });

  const fileArrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(fileArrayBuffer);

  const fileFullPath = resolve(fullPath, uniqueFilename);
  await writeFile(fileFullPath, buffer);

  const url = `${IMAGE_SERVER_URL}/${uniqueFilename}`;

  return makeResult({ url });
}
