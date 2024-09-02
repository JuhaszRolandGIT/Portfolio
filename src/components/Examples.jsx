import { useState } from "react";
import { EXAMPLES } from "../../examples.js";
import Modal from "./Modal.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal állapot
  const [modalContent, setModalContent] = useState(''); // Modal tartalom

  function handleClick(e, index) {
    setSelectedTopic(e);
    setSelectedStyle(index);
  }

  function handleTextClick(title) {
    // Beállítjuk a modal tartalmát "Hello World"-re
    setModalContent('Hello World');
    setIsModalOpen(true); // Modal megnyitása
  }

  function handleCloseModal() {
    setIsModalOpen(false); // Modal bezárása
  }

  let content;
  if (selectedTopic) {
    content = (
      <div id="tab-content">
        <h3>{selectedTopic.title}</h3>
        <div
          className="li-stlye"
          dangerouslySetInnerHTML={{ __html: selectedTopic.description }}
          onClick={() => handleTextClick(selectedTopic.title)} // Kattintás esemény
        />
      </div>
    );
  } else {
    content = 'Válassz egy lehetőséget ↑';
  }

  return (
    <section id="examples">
      <menu>
        <button onClick={() => handleClick(EXAMPLES[0], 0)} className={selectedStyle === 0 ? 'active' : ''}>Technológiák</button>
        <button onClick={() => handleClick(EXAMPLES[1], 1)} className={selectedStyle === 1 ? 'active' : ''}>Tapasztalat</button>
        <button onClick={() => handleClick(EXAMPLES[2], 2)} className={selectedStyle === 2 ? 'active' : ''}>Tanulmányok</button>
      </menu>
      {content}
      {isModalOpen && <Modal content={modalContent} onClose={handleCloseModal} />}
    </section>
  );
}
