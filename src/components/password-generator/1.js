import React, { useState } from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';

function App() {
    // Initialize state variables for password and password length
    const [password, setPassword] = useState('');
    const [passwordLength, setPasswordLength] = useState(8);

    function generatePassword(length) {
        // Generate a password using a combination of uppercase letters, lowercase letters, numbers, and special characters
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            generatedPassword += characters[randomIndex];
        }
        return generatedPassword;
    }

    function handleGeneratePassword() {
        setPassword(generatePassword(passwordLength));
    }

    return (
        <form>
            {/* Input field for password length */}
            <label>
                Password Length:
                <input
                    type="number"
                    value={passwordLength}
                    onChange={(e) => setPasswordLength(parseInt(e.target.value))}
                />
            </label>
            {/* Button to generate password */}
            <button type="button" onClick={handleGeneratePassword}>
                Generate Password
            </button>
            {/* Display generated password */}
            <div>{password}</div>
        </form>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
