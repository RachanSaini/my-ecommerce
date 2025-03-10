// app/registration/shopRegistrationCommon/BusinessDetails.tsx
import React from "react";
import FormInputs from "@/app/common/FormInputs";

interface BusinessDetailsProps {
  formData: {
    businessName: string;
    businessAddress: string;
    phoneNumber: string;
  };
  setFormData: (data: any) => void;
}

const BusinessDetails: React.FC<BusinessDetailsProps> = ({ formData, setFormData }) => {
  return (
    <div>
      <FormInputs
        label="Business Name"
        type="text"
        name="business name"
        value={formData.businessName}
        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
      />
      <FormInputs
        label="Business Address"
        type="text"
        name="business address"
        value={formData.businessAddress}
        onChange={(e) => setFormData({ ...formData, businessAddress: e.target.value })}
      />
      <FormInputs
        label="Phone Number"
        type="text"
        name="phone number"
        value={formData.phoneNumber}
        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
      />
    </div>
  );
};

export default BusinessDetails;