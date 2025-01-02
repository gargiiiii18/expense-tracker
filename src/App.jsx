import { useEffect, useState } from 'react'
import React from "react";
import './App.css';

function App() {

  const [name, setName] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [description, setDescription] = useState("");
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const url = import.meta.env.VITE_API_URL+'/transactions';
      const response = await fetch(url);
      return await response.json();
      // await setTransactions(transactions);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
   fetchTransactions().then(setTransactions);
  }, [])


  async function handleSubmit(event){
    event.preventDefault();
    const url = import.meta.env.VITE_API_URL+'/transaction';
    const price = name.split(' ')[0];
    console.log(url);
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            price,
            name:name.substring(price.length+1),
            // name,
            dateTime,
            description }), 
        });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
        const result = await response.json();
        setName('');
        setDateTime('');
        setDescription('');
        console.log('result', result);
      } catch (error) {

        console.log(error); 
      }
  }

  return (
    <main>
      <h1>$400<span> .00</span></h1>
      <form onSubmit={handleSubmit}>
        <div className="basics">
        <input type="text" placeholder='$600 asus zenbook s16' value={name} onChange={(event)=>{
            setName(event.target.value)
          }}/>
        <input type="datetime-local" value={dateTime} onChange={(event)=>{
            setDateTime(event.target.value)
          }}/>
        </div>
        <div className="description">
        <input type="text" placeholder='description'  value={description} onChange={(event)=>{
            setDescription(event.target.value)
          }}/>
        </div>
        <button>Add Transaction</button>
      </form>
      <div className="transactions">
        {transactions.length>=0 && transactions.map(transaction => {
          return(
           <div className="transaction">
           <div className="left">
             <div className="name" >{transaction.name}</div>
             <div className="desc">{transaction.description}</div>
           </div>
           <div className="right">
             <div className={"price "+(transaction.price<0?"red":"green")}>{transaction.price}</div>
             <div className="datetime" >{transaction.dateTime}</div>
           </div>
         </div>
          );
        })}
     
      {/* <div className="transaction">
        <div className="left">
          <div className="name">Stipend</div>
          <div className="desc">From my imaginary internship</div>
        </div>
        <div className="right">
          <div className="price green">+$200</div>
          <div className="datetime">17.12.2024 16.00</div>
        </div>
      </div>
      <div className="transaction">
        <div className="left">
          <div className="name">Samsung TV</div>
          <div className="desc">I needed it!</div>
        </div>
        <div className="right">
          <div className="price red">-$600</div>
          <div className="datetime">17.12.2024 16.00</div>
        </div>
      </div> */}
      </div>
    </main>
  )
}

export default App
