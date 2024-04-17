ReactDOM.render(
  <div className="abc">
    <Checkbox
      option={{ label: "I am checked", value: "abc", disabled: false }}
      name="ck"
    />
    <Checkbox
      option={{ label: "I am not checked", value: "abc", disabled: false }}
      name="ck"
      defaultChecked={true}
    />
  </div>,
  document.getElementById("root")
);
