import Image from "next/image";
import React, { useRef } from "react";

interface ImageUploadProps {
  avatarUrl: string;
  onImageUpload: (url: string) => void;
  isEditing: boolean;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  avatarUrl,
  onImageUpload,
  isEditing,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageUpload(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative w-24 h-24">
      <Image
        src={avatarUrl}
        alt="Avatar"
        width={94}
        height={94}
        className="object-cover rounded-full border border-gray-300"
      />
      {isEditing && (
        <button
          type="button"
          className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full"
          onClick={() => fileInputRef.current?.click()}
        >
          Change
        </button>
      )}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
  );
};
