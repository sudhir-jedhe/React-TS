import { useState } from "react";

const GRAPHIC_URL =
  "https://ik.imagekit.io/devtoolstech/devtools-tech-banner_QuoILF3fK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643016588956";

function PasswordStrength({ password }) {
  const [strength, setStrength] = useState(0);

  const calculateStrength = () => {
    let newStrength = 0;
    if (password.length >= 6 && password.length <= 32) {
      newStrength += password.length / 3;
      if (/[A-Z]/.test(password)) newStrength += 1;
      if (/[a-z]/.test(password)) newStrength += 1;
      if (/\d/.test(password)) newStrength += 1;
      if (/\W/.test(password)) newStrength += 1;
    }
    setStrength(Math.min(newStrength, 10));
  };

  useState(() => {
    calculateStrength();
  }, [password]);

  let strengthText = "";
  if (strength > 8) strengthText = "Strong";
  else if (strength > 6) strengthText = "Moderate";
  else if (strength > 3) strengthText = "Weak";
  else strengthText = "Very Weak";

  return (
    <div>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${(strength / 10) * 100}%` }}
        ></div>
      </div>
      <p className="strength-text">{strengthText}</p>
    </div>
  );
}

export default function App() {
  const [password, setPassword] = useState("");

  return (
    <main>
      <section id="graphic">
        <img src={GRAPHIC_URL} alt="Devtools Tech Banner" />
      </section>
      <section id="content">
        <h1>Devtools Tech</h1>
        <p>
          Devtools Tech is the leading platform for Frontend Engineers to
          enhance their skills, expand their knowledge, and prepare for
          technical interviews.
        </p>
        <a href="https://youtube.com/c/devtoolstech" target="_blank">
          Ace Your Interview →
        </a>
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <PasswordStrength password={password} />
      </section>
    </main>
  );
}
