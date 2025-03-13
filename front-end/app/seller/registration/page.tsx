"use client"
import React, { useState } from "react";
import FormButton from "@/app/common/FormButton";
import { useRouter } from "next/navigation";
import BasicInfo from "../shop/registration/shopRegistrationCommon/BasicInfo";
import BusinessDetails from "../shop/registration/shopRegistrationCommon/BusinessDetails";
import Agreement from "../shop/registration/shopRegistrationCommon/Agreement";
import api from "@/lib/api";
import Link from "next/link";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    try {
      const response = await api.post("owners/register", formData)
      console.log("Shop registered:", formData);
      if (response.data) {
        router.push("/seller/login");
      }
    } catch (error) {
      if (error.response && error.response.data.message === "Owner already exists") {
        router.push("/seller/login");
      }
      console.error("Registration failed:", error);
      alert(
        error.response?.data?.message ||
          "An error occurred during registration. Please try again."
      );
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
      <div className="flex justify-between mt-6 bg-gray-500">
        <p>Already have a seller account.</p>
        <button>
        <Link href="/seller/login">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default ShopRegistrationForm;