import Menu from "./Menu";
import MenuItem from "./MenuItem";
export default function App() {
  return (
    <div className="menu">
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>Questions</MenuItem>
        <MenuItem>Resources</MenuItem>
      </Menu>
    </div>
  );
}
