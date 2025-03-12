"use client"
import { useState } from "react";
import BasicInfo from "../shop/registration/shopRegistrationCommon/BasicInfo";
import FormButton from "@/app/common/FormButton";
import Link from "next/link";

export default function SellerRegistration() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
      });
      const handleSubmit = async () => {
        // add logic for backend registration.
        <Link href="/login/seller" className="text-blue-500 hover:underline">
            Login
        </Link>
      };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Register as Seller</h1>
            <form>
            <BasicInfo formData={formData} setFormData={setFormData} />
            <FormButton
            text="Register"
            onClick={handleSubmit}
            />
            </form>
            <p className="mt-4 text-center">
            Already have an account?{' '}
            <Link href="/seller/login" className="text-blue-500 hover:underline">
                Login
            </Link>
            </p>
          </div>
        </div>
      );
}