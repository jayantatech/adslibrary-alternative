import React, { useState, useEffect } from "react";

interface EditableFieldProps {
  label: string;
  value: string;
  onSave: (newValue: string) => void;
  isEditing: boolean;
  className: string;
}

export const EditableField: React.FC<EditableFieldProps> = ({
  label,
  value,
  onSave,
  isEditing,
  className,
}) => {
  const [fieldValue, setFieldValue] = useState(value);

  useEffect(() => {
    setFieldValue(value);
  }, [value, isEditing]);

  return (
    <div className="mb-2">
      {isEditing ? (
        <input
          type="text"
          className="border rounded text-[14px] font-OpenSans p-2 w-full"
          value={fieldValue}
          onChange={(e) => setFieldValue(e.target.value)}
        />
      ) : (
        <p className="text-gray-900 text-[16px] font-OpenSans">{fieldValue}</p>
      )}
    </div>
  );
};
