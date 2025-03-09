import FormButton from "@/app/common/FormButton";
import React from "react";

interface UploadDocumentsProps {
  formData: any;
  setFormData: (data: any) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const UploadDocuments = ({ formData, setFormData, nextStep, prevStep }: UploadDocumentsProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Upload Documents</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Business License</label>
        <input
          type="file"
          name="businessLicense"
          onChange={handleFileChange}
          className="mt-1 block w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Tax ID</label>
        <input
          type="file"
          name="taxId"
          onChange={handleFileChange}
          className="mt-1 block w-full"
          required
        />
      </div>
      <div className="flex justify-between">
        <FormButton text="Back" onClick={prevStep} />
        <FormButton text="Next" onClick={nextStep} />
      </div>
    </div>
  );
};

export default UploadDocuments;