import { useState } from 'react'
import './App.css';

function App() {

  const [name, setName] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [description, setDescription] = useState("");


  async function handleSubmit(event){
    event.preventDefault();
    const url = import.meta.env.VITE_API_URL+'/transaction';
    console.log(url);
      try {
        const response = await fetch('url', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, description, dateTime }), 
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log('result', result);
      } catch (error) {
        console.log(error); 
      }
  }

  return (
    <main>
      <h1>$400.00</h1>
      <form onSubmit={handleSubmit}>
        <div className="basics">
        <input type="text" placeholder='$600 asus zenbook s16'/>
        <input type="datetime-local" />
        </div>
        <div className="description">
        <input type="text" placeholder='description'/>
        </div>
        <button>Add Transaction</button>
      </form>
      <div className="transactions">
      <div className="transaction">
        <div className="left">
          <div className="name" value={name} onChange={(event)=>{
            setName(event.target.value)
          }}>Asus Zenbook s16</div>
          <div className="desc" value={description} onChange={(event)=>{
            setDescription(event.target.value)
          }}>I had money saved just for this</div>
        </div>
        <div className="right">
          <div className="price red">-$600</div>
          <div className="datetime" value={dateTime} onChange={(event)=>{
            setDateTime(event.target.value)
          }}>17.12.2024 16.00</div>
        </div>
      </div>
      <div className="transaction">
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
      </div>
      </div>
    </main>
  )
}

export default App
