import { useState } from 'react';
import { createPortal } from 'react-dom';
import './App.css';
import trophy from './star-trophy.png';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleVisibleModal = () => setShowModal((previousState) => !previousState);

  return (
    <section className="modal container">
      <button onClick={handleVisibleModal} className="modal__button" id="open-modal">
        Open Modal
      </button>
      <Modal {...{ handleVisibleModal, showModal }} />
    </section>
  );
}

function Modal({ handleVisibleModal, showModal }) {
  return createPortal(
    <div className={`modal__container ${showModal ? 'show-modal' : undefined}`}>
      <div className="modal__content">
        <div onClick={handleVisibleModal} className="modal__close close-modal" title="Close">
          <i className="bx bx-x" />
        </div>

        <img src={trophy} alt="trophy" className="modal__img" />

        <h1 className="modal__title">Good Job!</h1>
        <p className="modal__description">Click the button to close</p>

        <button className="modal__button modal__button-width">View status</button>

        <button onClick={handleVisibleModal} className="modal__button-link close-modal">
          Close
        </button>
      </div>
    </div>,
    document.body
  );
}

export default App;
