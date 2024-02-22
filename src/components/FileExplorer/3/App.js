import "./style.css";
import { useState } from "react";

export default function App() {
  const json = [
    {
      id: "1",
      name: "Office Map",
    },
    {
      id: "2",
      name: "New Employee Onboarding",
      children: [
        {
          id: "8",
          name: "Onboarding Materials",
        },
        {
          id: "9",
          name: "Training",
        },
      ],
    },
    {
      id: "3",
      name: "Office Events",
      children: [
        {
          id: "6",
          name: "2018",
          children: [
            {
              id: "10",
              name: "Summer Picnic",
            },
            {
              id: "11",
              name: "Valentine's Day Party",
            },
            {
              id: "12",
              name: "New Year's Party",
            },
          ],
        },
        {
          id: "7",
          name: "2017",
          children: [
            {
              id: "13",
              name: "Company Anniversary Celebration",
            },
          ],
        },
      ],
    },
    {
      id: "4",
      name: "Public Holidays",
    },
    {
      id: "5",
      name: "Vacations and Sick Leaves",
    },
  ];
  return <BuildTree treeJson={json} />;
}

function ElementWithChildren({ name, children }) {
  const [expanded, setExpanded] = useState(true);
  const res = children.map((child) => <BuildTree treeJson={child} />);
  const onClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <span onClick={() => onClick()}>{expanded ? "▼" : "▶"}</span>
      <span>{name}</span>
      <div style={{ paddingLeft: 16 }}>{expanded && res}</div>
    </div>
  );
}

function BuildTree({ treeJson }) {
  let result;
  if (Array.isArray(treeJson)) {
    result = treeJson.map((data) => {
      const name = data["name"];
      const children = data["children"];
      if (children) {
        return <ElementWithChildren name={name} children={children} />;
      } else {
        return (
          <div style={{ display: "flex", gap: 8 }}>
            <span>•</span>
            <span>{name}</span>
          </div>
        );
      }
    });
    return result;
  } else {
    const name = treeJson["name"];
    const children = treeJson["children"];
    if (children) {
      return <ElementWithChildren name={name} children={children} />;
    } else {
      return (
        <div style={{ display: "flex", gap: 8 }}>
          <span>•</span>
          <span>{name}</span>
        </div>
      );
    }
  }
}
