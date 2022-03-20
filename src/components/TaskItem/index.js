import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './TaskItem.css';

import * as actions from '../../store/actions';

export default function TaskItem(props) {
  const dispatch = useDispatch();
  const {
    text, check, id, projectId,
  } = props;
  const [checked, setChecked] = useState(check);

  const newCheck = (e) => {
    const newChecked = e.target.checked;
    setChecked(newChecked);
    dispatch(actions.newCheck({ id, projectId, checked: newChecked }));
  };

  return (
    <div id={id} className={checked ? 'line-through' : 'no-underline'}>
      <input type="checkbox" checked={checked} onChange={newCheck} />
      {text}
    </div>
  );
}
