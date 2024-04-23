import { useLoaderData } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import CoffeeCard from "./CoffeeCard";

function App() {
  
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)
  
  return (
 <div>
  {
coffees.map(coffee => <CoffeeCard 
key={coffee._id}
coffee = {coffee}
coffees = {coffees}
setCoffees = {setCoffees}

>

</CoffeeCard>)
  }
 </div>
  );
}

export default App;
