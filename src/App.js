import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <CardArea />
    </div>
  );
}

function CardArea() {
  const [clicks, setClicks] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  const handleClick = () => {
    setClicks(clicks + 1);
    setBackgroundColor(generateRandomColor());
  };

  const handleAddClick = () => {
    setClicks(clicks + 1);
  };

  const handleSubtractClick = () => {
    if (clicks > 0) {
      setClicks(clicks - 1);
    }
  };

  const handleRefreshClick = () => {
    setClicks(0);
    setBackgroundColor('#FFFFFF');
  };

  const generateRandomColor = () => {
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#33B8FF', '#FFB833', '#A233FF'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="card-area" style={{ backgroundColor }} onClick={handleClick}>
      <h2>{clicks}</h2>
      <div className="buttons">
        <Button onClick={handleAddClick}>+</Button>
        <Button onClick={handleSubtractClick}>-</Button>
        <Button onClick={handleRefreshClick}>Refresh</Button>
      </div>
    </div>
  );
}

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

export default App;
