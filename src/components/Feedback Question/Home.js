import React, { useState } from "react";

import Feedback from "./Feedback";
import Button from "./common/Button";

const Home = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <>
      <main className="content">
        <h1>We Want to Hear from You!</h1>
        <p>
          We value your feedback and would love to hear your thoughts! Help us
          improve by sharing your feedback on your experience with us. Your
          feedback matters to us and will help us enhance our products/services
          to better serve you. Thank you for taking the time to share your
          feedback.
        </p>
        <Button
          classNames="feedback-cta"
          onClick={() => setIsOpen(true)}
          label="Provide Feedback"
        />
      </main>
      <Feedback isOpen={open} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Home;
