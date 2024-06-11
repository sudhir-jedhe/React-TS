import React from "react";
import Button from "./Button";

export default function App() {
  return (
    <div className="flex flex-col gap-4 p-2">
      <div className="flex gap-4">
        <div>
          <p>Primary Small</p>
          <Button intent="primary" size="small">Button</Button>
        </div>
        <div>
          <p>Primary Medium</p>
          <Button intent="primary" size="medium">Button</Button>
        </div>
      </div>
      <div className="flex gap-4">
        <div>
          <p>Outline Small</p>
          <Button intent="outline" size="small">Button</Button>
        </div>
        <div>
          <p>Outline Medium</p>
          <Button intent="outline" size="medium">Button</Button>
        </div>
      </div>
      <div className="flex gap-4">
        <div>
          <p>Destructive Small</p>
          <Button intent="destructive" size="small">Button</Button>
        </div>
        <div>
          <p>Destructive Medium</p>
          <Button intent="destructive" size="medium">Button</Button>
        </div>
      </div>
    </div>
  );
}
