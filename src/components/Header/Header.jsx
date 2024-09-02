import { useState, useEffect } from 'react';
import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

const reactDescriptions = ["Szoftvertejlesztő", "Szoftvertesztelő"];

function genRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Header() {
  const [currentDescription, setCurrentDescription] = useState(reactDescriptions[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDescription(reactDescriptions[genRandomInt(reactDescriptions.length)]);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const renderDescription = () => {
    if (currentDescription === "Szoftvertesztelő") {
      return (
        <>
          Szoftver
          <span className="highlight">tesztelő</span>
        </>
      );
    }
    return currentDescription;
  };

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>Juhász Roland</h1>
      <p>
        {renderDescription()}
      </p>
    </header>
  );
}
