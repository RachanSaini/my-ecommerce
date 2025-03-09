import FormButton from "@/app/common/FormButton";
import FormInput from "@/app/common/FormInputs";
import React from "react";

interface BusinessDetailsProps {
  formData: any;
  setFormData: (data: any) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const BusinessDetails = ({ formData, setFormData, nextStep, prevStep }: BusinessDetailsProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Business Details</h2>
      <FormInput
        label="Business Address"
        type="text"
        name="businessAddress"
        value={formData.businessAddress}
        onChange={handleChange}
        placeholder="Enter your business address"
        required
      />
      <FormInput
        label="Phone Number"
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="Enter your phone number"
        required
      />
      <div className="flex justify-between">
        <FormButton text="Back" onClick={prevStep} />
        <FormButton text="Next" onClick={nextStep} />
      </div>
    </div>
  );
};

export default BusinessDetails;