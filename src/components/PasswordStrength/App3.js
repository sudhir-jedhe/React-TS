import { useState, useEffect } from "react";
import {
  hasNumber,
  hasUpperCase,
  hasLowerCase,
  hasSpecialCharacters,
} from "./utils";

export default function App() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(0);
  const [progressBarStyles, setProgressBarStyles] = useState({
    width: "0%",
    backgroundColor: "transparent",
  });

  const handlePassword = (e) => {
    const {
      target: { value = "" },
    } = e;
    setPassword(value);
  };

  useEffect(() => {
    const updateProgressBarStyles = {
      backgroundColor: "red",
    };

    let totalStrength = 0;

    if (password.length > 3) {
      const strengthByLength = Math.min(6, Math.floor(password.length / 3));
      let strengthByCharacterType = 0;
      if (hasNumber.test(password)) {
        strengthByCharacterType += 1;
      }

      if (hasUpperCase.test(password)) {
        strengthByCharacterType += 1;
      }

      if (hasLowerCase.test(password)) {
        strengthByCharacterType += 1;
      }

      if (hasSpecialCharacters.test(password)) {
        strengthByCharacterType += 1;
      }

      totalStrength = strengthByLength + strengthByCharacterType;
    } else {
      totalStrength = 0;
    }

    updateProgressBarStyles.width = `${totalStrength * 10}%`;

    if (totalStrength > 8) {
      updateProgressBarStyles.backgroundColor = "green";
    } else if (totalStrength > 6) {
      updateProgressBarStyles.backgroundColor = "orange";
    }
    setProgressBarStyles(updateProgressBarStyles);
    setStrength(totalStrength);
  }, [password]);

  return (
    <div className="app">
      <h1>Password Strength checker</h1>
      <input type="text" onChange={handlePassword} />
      <div className="progress-container">
        <div className="progress-bar" style={{ ...progressBarStyles }} />
      </div>
      <p>Strength of your password (out of 10) is {strength}</p>
    </div>
  );
}
