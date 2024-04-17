ReactDOM.render(
  <div className="abc">
    <CheckboxGroup
      options={[
        { label: "I am not checked", value: "xyz", disabled: false },
        { label: "I am checked", value: "abc", disabled: false },
        { label: "I am disabled", value: "pqr", disabled: true },
        { label: "I am checked as well", value: "lmn", disabled: false },
      ]}
      name="radio"
      value={["abc", "lmn"]}
      inline={true}
    />
  </div>,
  document.getElementById("root")
);
