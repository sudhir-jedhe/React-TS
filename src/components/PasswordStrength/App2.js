import React, { useState } from "react";
import "./style.css";

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(0);

  const handleChange = (event) => {
    const password = event.target.value;
    setPassword(password);
    setStrength(calculateStrength(password));
  };

  const calculateStrength = (password) => {
    let strength = 0;
    if (password.length >= 6 && password.length <= 32) {
      strength += password.length / 4;
      if (/[A-Z]/.test(password)) strength += 1;
      if (/[a-z]/.test(password)) strength += 1;
      if (/\d/.test(password)) strength += 1;
      if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    } else if (password.length < 3) {
      strength = 0;
    }
    return Math.min(Math.round(strength), 10);
  };

  const getStrengthText = (strength) => {
    if (strength > 8) return "Strong";
    if (strength > 6) return "Moderate";
    if (strength > 3) return "Weak";
    return "Very Weak";
  };

  return (
    <div className="password-strength-checker">
      <input type="password" value={password} onChange={handleChange} />
      <div>Strength: {strength}/10</div>
      <div>{getStrengthText(strength)}</div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${strength * 10}%` }} />
      </div>
    </div>
  );
};

export default PasswordStrengthChecker;
