import { useState } from "react";
import "./App.css";
import { BirthdayList } from "./components/BirthdayList/BirthdayList";
import data from "./data/data";

console.log(data);
function App() {
  const [people, setPeople] = useState(data);
  const [buttonTitle, setButtonTitle] = useState<string>("Clear All")
  const buttonToggler = () =>{
    people.length !== 0 ?
    setPeople([]) : setPeople(data)
  }
  return (
    <main>
      <section className ="container">
        <h3>{people.length} people have birthday here</h3>
        <BirthdayList people={people} />
        <button onClick={buttonToggler}>{buttonTitle}</button>
      </section>
    </main>
  );
}

export default App;
