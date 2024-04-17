ReactDOM.render(
  <div className="abc">
    <FileUploader name="file" />
    <FileUploader
      name="error"
      label="Upload"
      helperText="There is some error"
      error={true}
    />
    <FileUploader name="disabled" label="Disabled" readOnly={true} />
  </div>,
  document.getElementById("root")
);
