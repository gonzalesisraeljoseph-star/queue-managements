import { useState } from "react";
import "./App.css";
import QueueForm from "./component/QueueForm";
export default function App(){
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    //add data to queue
  };
  const updateStatus = (id, newStatus) => {
    //change data to queue
  };
  const removeFromQueue = (id) => {
    //remove data to queue
  };

  return(
    <div className="app">
      <header>
        <h1>Queue Management Application</h1>
        <p>Manage your customer efficiently</p>
      </header>
      <main>
        <QueueForm onAdd={addToQueue} />
        <h1>QueueDisplay</h1>
      </main>
    </div>
  );
}