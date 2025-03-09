import BrandRegistrationForm from "@/app/registration/BrandRegistration";
import React from "react";

const RegisterBrand = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Join KindKloset as a Seller</h1>
      <BrandRegistrationForm />
    </div>
  );
};

export default RegisterBrand;