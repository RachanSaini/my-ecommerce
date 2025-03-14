"use client"
import React, { useState } from "react";
import FormInputs from "@/app/common/FormInputs";
import FormButton from "@/app/common/FormButton";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log(api.post("owners/login", formData));
      const response = await api.post("owners/login", formData)
      console.log(response);
      console.log("login successful:", formData);
      if (response.data) {
        router.push("/seller/dashboard");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert(
        error.response?.data?.message ||
          "An error occurred during Login. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form className="space-y-4">
          <FormInputs
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <FormInputs
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <FormButton
            text="Login"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
}