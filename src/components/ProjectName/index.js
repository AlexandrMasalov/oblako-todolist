import './ProjectName.css';

export default function ProjectName(props) {
  const { title } = props;

  return (
    <div className="project-name">
      {title}
    </div>
  );
}
