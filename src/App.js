import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";

import "./index.css";

import data from "./data"
function App() {
  const cards = data.map((item) => (
    <Card
      key={item.id}
     item={item}
    />
  ));
 
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
