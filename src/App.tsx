
import './App.css';
import { BirthdayList } from './components/BirthdayList/BirthdayList';
import data from './data/data';



console.log(data);
function App() {
  return (
   <main>
     <h3>Birthday Lists</h3>
     <BirthdayList people = {data}/> 
   </main>
  );
}

export default App;
