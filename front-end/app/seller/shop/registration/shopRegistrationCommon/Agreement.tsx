import React from "react";

interface AgreementProps {
  agreed: boolean;
  setAgreed: (agreed: boolean) => void;
}

const Agreement: React.FC<AgreementProps> = ({ agreed, setAgreed }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
        I agree to the terms and conditions
      </label>
    </div>
  );
};

export default Agreement;