/* eslint-disable no-return-assign */
/* eslint-disable react/button-has-type */
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import OptionSelect from '../OptionSelect';

import * as actions from '../../store/actions';

export default function FormModal() {
  const [opt, setOpt] = useState(false);
  const [inputNewTodo, setInputNewTodo] = useState('');
  const [inputNewCategory, setInputNewCategory] = useState('');
  const [selectCategory, setSelectCategory] = useState('');
  const dispatch = useDispatch();
  const data = useSelector((state) => state.tasks);

  function reset() {
    setOpt(false);
    setInputNewTodo('');
    setInputNewCategory('');
    setSelectCategory('');
  }

  useEffect(() => {
    dispatch(actions.addProject());
  }, [dispatch]);

  const onClickInput = (e) => {
    console.log(e.target.value);
    if (e.target.value === 'newCategore') {
      setOpt(true);
    }
    setSelectCategory(e.target.value);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    let formData;
    if (opt) {
      formData = { todo: inputNewTodo, task: inputNewCategory };
    } else {
      formData = { todo: inputNewTodo, task: selectCategory };
    }
    dispatch(actions.newEvent(formData));
    reset();
    console.log(formData);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <p>Новая задача</p>
      <div>
        <input
          placeholder="Название задачи..."
          type="text"
          name="todo"
          value={inputNewTodo}
          onChange={(e) => {
            setInputNewTodo(e.target.value);
            console.log(e.target.value);
          }}
        />
      </div>
      <div>
        <select name="category" onChange={onClickInput}>
          <option>Категория</option>
          {Array.isArray(data.tasks) && data.tasks.map((task) => (
            <OptionSelect
              key={task.id}
              id={task.id}
              title={task.title}
            />
          ))}
          <option value="newCategore">Новая категория</option>
        </select>
        <div>
          {opt
          && (
          <input
            type="text"
            name="newCategoryInput"
            value={inputNewCategory}
            onChange={(e) => {
              setInputNewCategory(e.target.value);
              console.log(e.target.value);
            }}
          />
          )}
        </div>
      </div>
      <div>
        <p>Действия</p>
        <button type="reset" onClick={reset}>Отмена</button>
        <button type="submit">Отправить</button>
      </div>

    </form>
  );
}
