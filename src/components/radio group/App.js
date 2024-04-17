ReactDOM.render(
  <div className="abc">
    <RadioGroup
      options={[
        { label: "I am not checked", value: "xyz", disabled: false },
        { label: "I am checked", value: "abc", disabled: false },
      ]}
      name="radio"
      prefillValue="abc"
      inline={true}
    />
  </div>,
  document.getElementById("root")
);
