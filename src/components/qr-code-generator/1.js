import React, { useState, useEffect } from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

const App = () => {
const [website, setWebsite] = useState('');
const [qrUrl, setQrUrl] = useState('');

const handleSubmit = (event) => {
event.preventDefault();
setQrUrl(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${website}`);
};

return (
  <div>
    <form onSubmit={handleSubmit}>
      <label>
        Website:
        <input type="text" value={website} onChange={(event) => setWebsite(event.target.value)} />
      </label>
      <input type="submit" value="Generate QR" />
    </form>
    <div className="qr-holder">{qrUrl && <img src={qrUrl} alt="QR code for website" />}</div>
  </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"))
