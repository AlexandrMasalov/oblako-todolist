import TaskItem from '../TaskItem';

export default function TaskList(props) {
  const { todos, projectId } = props;
  const todosArr = todos.todos;

  return todosArr.map((todo) => (
    <TaskItem
      key={todo.id}
      id={todo.id}
      text={todo.text}
      check={todo.isCompleted}
      projectId={projectId}
    />
  ));
}
