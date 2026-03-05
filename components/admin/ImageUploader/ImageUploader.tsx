"use client";

import { uploadImageAction } from "@/actions/upload/upload-image-action";
import { Button } from "@/components/Button/Button";
import { IMAGE_UPLOADER_MAX_SIZE } from "@/lib/consts";
import { ImageUpIcon } from "lucide-react";
import { useRef, useState, useTransition } from "react";
import { toast } from "react-toastify";

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploadin, setTransition] = useTransition();
  const [imgUrl, setImgUrl] = useState("");

  function handleChooseFile() {
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
  }

  function handleFileChange() {
    toast.dismiss();

    if (!fileInputRef.current) {
      setImgUrl("");
      return;
    }

    const fileInput = fileInputRef.current;
    const file = fileInput.files?.[0];

    if (!file) {
      setImgUrl("");
      return;
    }

    if (file.size > IMAGE_UPLOADER_MAX_SIZE) {
      toast.error("Imagem muito grande. Tamanho máximo: 900KB.");
      fileInput.value = "";
      setImgUrl("");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    // ACTION
    setTransition(async () => {
      const response = await uploadImageAction(formData);

      if (response.error) {
        toast.error(response.error);
        fileInput.value = "";
        return;
      }

      setImgUrl(response.url);

      toast.success("Imagem enviada com sucesso");
    });

    fileInput.value = "";
  }

  return (
    <div className="flex flex-col gap-2 py-4">
      <Button
        onClick={handleChooseFile}
        type="button"
        className="self-start"
        disabled={isUploadin}
      >
        <ImageUpIcon /> Enviar imagem
      </Button>

      {!!imgUrl && (
        <div>
          <p>
            <b>URL:</b> {imgUrl}
          </p>

          {/* eslint-disable @next/next/no-img-element */}
          <img src={imgUrl} alt="" />
        </div>
      )}

      <input
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        name="file"
        type="file"
        accept="image/*"
        disabled={isUploadin}
      />
    </div>
  );
}
