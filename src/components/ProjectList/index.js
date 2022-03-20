/* eslint-disable no-use-before-define */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../store/actions';
import ProjectItem from '../ProjectItem';
import './ProjectList.css';

export default function ProjectList() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(actions.addProject());
  }, [dispatch]);

  if (data.length === 0) {
    return <p>Загрузка</p>;
  }
  return (
    <div className="project-list">
      {data.tasks.map((task) => (
        <ProjectItem key={task.id} id={task.id} title={task.title} todos={{ todos: task.Todos }} />
      ))}
    </div>
  );
}
