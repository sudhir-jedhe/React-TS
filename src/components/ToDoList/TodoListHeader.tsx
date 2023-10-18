import HeaderComponent from "./HeaderComponent";
export default function TodoListHeader(props: {
  title:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
}) {
  return <HeaderComponent title={"ToDo List"} />;
}
