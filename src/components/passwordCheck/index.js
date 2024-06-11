import React, { useState } from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';

function App() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function checkPasswordsMatch() {
        return password === confirmPassword;
    }

    function checkPasswordStrength() {
        // Regular expression to check if password includes at least one special character
        const specialCharacterRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        // Check if password is at least 8 characters long
        const isLongEnough = password.length >= 8;
        // Check if password has a special character and is at least 8 characters long
        return isLongEnough && specialCharacterRegex.test(password);
    }

    return (
        <form>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <label>
                Confirm Password:
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </label>
            <br />
            <p>Passwords match: {checkPasswordsMatch() ? 'Yes' : 'No'}</p>
            <p>Password strength: {checkPasswordStrength() ? 'Strong' : 'Weak'}</p>
        </form>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
