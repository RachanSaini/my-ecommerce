"use client"
import React, { useState } from "react";
import BasicInfo from "./brandRegistrationCommon/BasicInfo";
import BusinessDetails from "./brandRegistrationCommon/BusinessDetails";
import Agreement from "./brandRegistrationCommon/Agreement";
import api from "@/lib/api";

const BrandRegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    brandName: "",
    email: "",
    password: "",
    businessAddress: "",
    phoneNumber: "",
    agreeToTerms: false,
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const submitForm = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("brandName", formData.brandName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("password", formData.password);
      formDataToSend.append("businessAddress", formData.businessAddress);
      formDataToSend.append("phoneNumber", formData.phoneNumber);
      formDataToSend.append("agreeToTerms", formData.agreeToTerms.toString());

  
      const response = await api.post("/register-brand", formDataToSend, {
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.status === 201) {
        alert("Brand registered successfully!");
      } else {
        alert("Failed to register brand. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(error || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {step === 1 && <BasicInfo formData={formData} setFormData={setFormData} nextStep={nextStep} />}
      {step === 2 && (
        <BusinessDetails formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
      )}
      {step === 3 && (
        <Agreement formData={formData} setFormData={setFormData} prevStep={prevStep} submitForm={submitForm} />
      )}
    </div>
  );
};

export default BrandRegistrationForm;