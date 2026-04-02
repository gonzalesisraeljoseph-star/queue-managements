import { useState } from "react";
import "./App.css";
import QueueForm from "./component/QueueForm";
export default function App(){
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    setQueue([...queue, {...customer, id: Date.now(), status: "waiting"}])
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
      <main className="container">
        <div className="left">
          <QueueForm onAdd={addToQueue} />
        </div>
        <div className="right">
          <h1>QueueDisplay</h1>
        </div>
      </main>
    </div>
  );
}