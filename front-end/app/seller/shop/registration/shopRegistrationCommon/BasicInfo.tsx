import React from "react";
import FormInputs from "@/app/common/FormInputs";

interface BasicInfoProps {
  formData: {
    username: string;
    email: string;
    password: string;
  };
  setFormData: (data: any) => void;
}

const BasicInfo: React.FC<BasicInfoProps> = ({ formData, setFormData }) => {
  return (
    <div>
      <FormInputs
        label="Username"
        type="text"
        name="username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
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
    </div>
  );
};

export default BasicInfo;