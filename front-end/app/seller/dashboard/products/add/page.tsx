"use client"
import React, { useState } from "react";
import FormInputs from "@/app/common/FormInputs";
import FormButton from "@/app/common/FormButton";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //Add backend logic
    // Simulate product submission logic
    console.log("Product added:", formData);
    router.push("/dashboard/products"); // Redirect to products page after submission
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Add Product</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInputs
            label="Product Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <FormInputs
            label="Description"
            type="text"
            name="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
          <FormInputs
            label="Price"
            type="number"
            name="price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          />
          <FormButton
            text="Add Product"
          />
        </form>
      </div>
    </div>
  );
}