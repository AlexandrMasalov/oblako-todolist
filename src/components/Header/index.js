/* eslint-disable react/button-has-type */
import { useState } from 'react';
import './Header.css';
import Modal from '../Modal';
import FormModal from '../FormModal';

export default function Header() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <div className="header">
        <div className="header__title">Задачи</div>
        <div className="header__btn">
          <button className="header__btn_open" onClick={() => setModalActive(true)}>+</button>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <FormModal />
      </Modal>
    </>
  );
}
