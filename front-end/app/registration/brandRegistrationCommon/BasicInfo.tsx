import React from "react";
import FormInput from "@/app/common/FormInputs";
import FormButton from "@/app/common/FormButton";

interface BasicInfoProps {
  formData: any;
  setFormData: (data: any) => void;
  nextStep: () => void;
}

const BasicInfo = ({ formData, setFormData, nextStep }: BasicInfoProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Basic Information</h2>
      <FormInput
        label="Brand Name"
        type="text"
        name="brandName"
        value={formData.brandName}
        onChange={handleChange}
        placeholder="Enter your brand name"
        required
      />
      <FormInput
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        required
      />
      <FormInput
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Create a password"
        required
      />
      <FormButton text="Next" onClick={nextStep} />
    </div>
  );
};

export default BasicInfo;