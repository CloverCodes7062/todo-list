import './App.css';
import React, { useState } from 'react';

function Background({ children }) {
  return (
    <div className="background">
      {children}
    </div>
  );
}

function Button(props) {
  return (<button class="btn btn-primary add-item" onClick={props.onClick}>
    <span>Add Item</span>
  </button>);
}

function InputContainer(props) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    props.onClick(inputValue);
    setInputValue("");
  };

  return (<div className="input-container">
    <input id="add-item-inputfield"
      placeholder='Enter an Item to Add'
      value={inputValue}
      onChange={handleInputChange}
    />
    <Button onClick={handleButtonClick} />
  </div>);
}


function List(props) {
  return (<ul>
    {props.items.map(item => <li className={props.liClass} key={item.id}>{item.text}</li>)}
  </ul>
  );
}

function MainContainer({ onClick, items }) {
  let liClass = "animate__animated animate__fadeIn list-item-container";
  let divClass = "animate__animated animate__backInLeft main-container";

  return (
    <div className={divClass}>
      <h1>Todo List</h1>
      <List items={items} liClass={liClass}></List>
      <InputContainer onClick={onClick} />
    </div>
  );
}

function App() {
  const [items, setItems] = useState([]);

  const handleClick = (inputValue) => {

    const newItem = {
      id: items.length + 1,
      text: inputValue,
    }

    setItems((prevItems) => [...prevItems, newItem])
  }

  return (
    <Background>
      <MainContainer onClick={handleClick} items={items} />
    </Background>
  );
}

export default App;
