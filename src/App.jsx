import React, { useState } from 'react';
import './App.css';

function App() {
  // State for items and new item input
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  // State for counter
  const [count, setCount] = useState(0);

  // State for sum of numbers
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(0);

  // State for search filter
  const [query, setQuery] = useState('');
  const data = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
  const filteredData = data.filter(item => item.toLowerCase().includes(query.toLowerCase()));

  // State for showing/hiding element
  const [isVisible, setIsVisible] = useState(true);

  // State for enabling/disabling button
  const [isDisabled, setIsDisabled] = useState(false);

  // Handle adding new item
  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  // Handle calculating sum
  const calculateSum = () => {
    setSum(Number(num1) + Number(num2));
  };

  // Handle resetting counter
  const resetCounter = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>React Tasks</h1>
      
      {/* Task 1: Display Simple JSX */}
      <div className="task-boundary display-jsx">
        <h2>Task 1-3 !</h2>
      </div>

      {/* Task 2: Counter */}
      <div className="task-boundary counter">
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={resetCounter}>Reset</button>
        <p>Counter Value: {count}</p>
      </div>

      {/* Task 3: Search Filter */}
      <div className="task-boundary search-filter">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <ul>
          {filteredData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Task 1: Show/Hide Element */}
      <div className="task-boundary toggle-element">
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? 'Hide' : 'Show'} Element
        </button>
        {isVisible && <p>This is a toggleable element!</p>}
      </div>

      {/* Task 1: Enable/Disable a Button */}
      <div className="task-boundary toggle-disable">
        <button onClick={() => setIsDisabled(!isDisabled)}>
          Toggle Disable
        </button>
        <button disabled={isDisabled}>Action Button</button>
      </div>

      {/* Task 1: Two-Way Data Binding Using Textbox */}
      <div className="task-boundary add-item">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter new item"
        />
        <button onClick={handleAddItem}>Add Item</button>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Task 1: Do Sum of Two Numbers */}
      <div className="task-boundary calculate-sum">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Number 1"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Number 2"
        />
        <button onClick={calculateSum}>Calculate Sum</button>
        <p>Sum: {sum}</p>
      </div>
    </div>
  );
}

export default App;
