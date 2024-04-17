ReactDOM.render(
  <div className="abc">
    <Input
      type="text"
      placeholder="Enter Text"
      label="Input Box"
      helperText="I am a text type input box"
      name="typeText"
    />
    <hr />
    <Input
      type="email"
      placeholder="Enter Email Address"
      label="Email Box"
      helperText="I am an email type box"
      name="typeEmail"
    />
    <hr />
    <Input
      type="password"
      placeholder="Enter Password"
      label="Password Box"
      helperText="I am a password type box"
      name="typePassword"
    />
    <hr />
    <Input
      type="date"
      placeholder="Enter date"
      label="Date Box"
      helperText="I am a Date type input box"
      name="typeDate"
    />
    <hr />
    <Input
      type="tel"
      placeholder="Enter Telephone Number"
      label="Telephone Box"
      helperText="I am a Telephone type input box"
      name="typeTel"
    />
    <hr />
  </div>,
  document.getElementById("root")
);
