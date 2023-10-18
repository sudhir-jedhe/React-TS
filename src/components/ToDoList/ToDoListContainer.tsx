import TodoListHeader from "./TodoListHeader";
import InputContainer from "./InputContainer";
import ListContainer from "./ListContainer";

export default function ToDoListContainer() {
  // id, name, completed, toggleTodo, deleteTodo
  // const [id, setId] =

  return (
    <div className="todoListContainer">
      <TodoListHeader title={"ToDo List"} />
      <InputContainer />
      <ListContainer />
    </div>
  );
}
