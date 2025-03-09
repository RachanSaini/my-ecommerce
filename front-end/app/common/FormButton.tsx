import React from "react";

interface FormButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

const FormButton = ({ text, onClick, disabled }: FormButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary disabled:bg-gray-400"
    >
      {text}
    </button>
  );
};

export default FormButton;