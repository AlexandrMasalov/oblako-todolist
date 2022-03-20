import ProjectName from '../ProjectName';
import TaskList from '../TaskList';

import './ProjectItem.css';

export default function ProjectItem(props) {
  const { id, title, todos } = props;

  return (
    <div id={id} className="project-item">
      <ProjectName title={title} />
      <TaskList todos={todos} projectId={id} />
    </div>
  );
}
