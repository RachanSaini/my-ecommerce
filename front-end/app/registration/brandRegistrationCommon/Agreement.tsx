import FormButton from "@/app/common/FormButton";
import React from "react";

interface AgreementProps {
  formData: any;
  setFormData: (data: any) => void;
  prevStep: () => void;
  submitForm: () => void;
}

const Agreement = ({ formData, setFormData, prevStep, submitForm }: AgreementProps) => {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, agreeToTerms: e.target.checked });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Agreement</h2>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleCheckboxChange}
            className="mr-2"
            required
          />
          <span className="text-sm text-gray-700">
            I agree to the terms and conditions of MyStore.
          </span>
        </label>
      </div>
      <div className="flex justify-between">
        <FormButton text="Back" onClick={prevStep} />
        <FormButton text="Submit" onClick={submitForm} />
      </div>
    </div>
  );
};

export default Agreement;