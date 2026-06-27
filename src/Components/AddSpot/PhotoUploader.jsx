import { useRef } from "react";

export default function PhotoUploader({
  images = [],
  onChange,
  maxImages = 8,
}) {
  const inputRef = useRef(null);

  const handleFiles = (files) => {
    const selected = Array.from(files);

    const newImages = selected.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    onChange([...images, ...newImages].slice(0, maxImages));
  };

  const removeImage = (index) => {
    const updated = images.filter((_, i) => i !== index);
    onChange(updated);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold">
          Upload Photos
        </h3>

        <p className="text-sm text-on-surface-variant mt-1">
          Add up to {maxImages} photos of the place.
        </p>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        hidden
        onChange={(e) => handleFiles(e.target.files)}
      />

      <div
        onClick={() => inputRef.current.click()}
        className="border-2 border-dashed border-outline-variant rounded-2xl p-10 text-center cursor-pointer hover:border-primary transition-colors"
      >
        <div className="text-5xl mb-4">
          📷
        </div>

        <p className="font-medium">
          Click to upload photos
        </p>

        <p className="text-sm text-on-surface-variant mt-2">
          JPG, PNG or WEBP
        </p>
      </div>

      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden"
            >
              <img
                src={img.preview}
                alt=""
                className="w-full h-32 object-cover"
              />

              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 text-white hover:bg-red-500 transition"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}