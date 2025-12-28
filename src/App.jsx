 import Clock from "./clock";

function App() {
  const now = new Date().toISOString().substring(11,16);
  const today = new Date().toISOString().substring(0,10);
  
  return (
    
    <>
      <h1>Work Time</h1>
      <p>{today} {now}</p>
      <input type="date" defaultValue={today}/>
      <input type="time" defaultValue={now}/>
      <Clock />
    </>
  )
}

export default App
