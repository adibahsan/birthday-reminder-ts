import { useState } from "react";
import { BirthdayList } from "./components/BirthdayList/BirthdayList";
import data from "./data/data";

// console.log(data);
function App() {
  const [people, setPeople] = useState(data);
  const [buttonTitle, setButtonTitle] = useState<string>("Clear All");
  const buttonToggler = () => {
    if (people.length !== 0) {
      setPeople([]);
      setButtonTitle("Reveal All");
    } else {
      setPeople(data);
      setButtonTitle("Clear All");
    }
  };
  return (
    <main>
      <section className="container">
        <h3 style={{textAlign: "center"}}>Showing Birthdays of {people.length} People </h3>
        <BirthdayList people={people} />
        <button onClick={buttonToggler}>{buttonTitle}</button>
      </section>
    </main>
  );
}

export default App;
