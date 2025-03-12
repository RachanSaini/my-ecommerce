// app/registration/ShopRegistrationForm.tsx
import React, { useState } from "react";
import BasicInfo from "./shopRegistrationCommon/BasicInfo";
import BusinessDetails from "./shopRegistrationCommon/BusinessDetails";
import Agreement from "./shopRegistrationCommon/Agreement";
import FormButton from "@/app/common/FormButton";
import { useRouter } from "next/navigation";

const ShopRegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    businessName: "",
    businessAddress: "",
    phoneNumber: "",
  });
  const [agreed, setAgreed] = useState(false);
  const router = useRouter();

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    if (!agreed) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    try {
      //Add backend shop registration API logic
      // Simulate shop registration logic
      console.log("Shop registered:", formData);
      router.push("/dashboard");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      {step === 1 && <BasicInfo formData={formData} setFormData={setFormData} />}
      {step === 2 && <BusinessDetails formData={formData} setFormData={setFormData} />}
      {step === 3 && <Agreement agreed={agreed} setAgreed={setAgreed} />}

      <div className="flex justify-between mt-6 bg-gray-500">
        {step > 1 && (
          <FormButton
            text="Previous"
            onClick={handlePrevious}
          />
        )}
        {step < 3 ? (
          <FormButton
            text="Next"
            onClick={handleNext}
          />
        ) : (
          <FormButton
            text="Submit"
            onClick={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default ShopRegistrationForm;