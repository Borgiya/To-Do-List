
import'./App.css';
import Input from './Components/Input';
import { useState } from 'react';
import ToDoItem from './Components/ToDoItem';

function App() {
  const[items,setItems]=useState([])
  const addItems=(inputText)=>{
    setItems((prevItems)=>{
      return [...prevItems,inputText]
    });
  };
  console.log(items);
  const deleteItem=(id)=>{
    setItems((prevItems)=>{
      return prevItems.filter((item,index)=>{
        return index!==id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do list</h1>
      </div>
      <Input addItems={addItems}/>
      <div>
        <ul>
          {
            items.map((item,index)=>{
              return(
                <ToDoItem key={index} text={item} deleteItem={deleteItem} id={index}/>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
