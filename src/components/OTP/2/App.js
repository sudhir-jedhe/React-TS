import OtpComponent from "./OtpComponent";

export default function App() {
  return (
    <div class="wrapper">
      <div class="heading">
        <h2>OTP Verification</h2>
        <p>Please enter the code we have sent you.</p>
      </div>
      <form>
        <OtpComponent size={6} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
