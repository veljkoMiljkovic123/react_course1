import Navbar from "./components/Navbar";
import Title from "./components/Title";

function App() {
  let name = 'Tihomir'
  let lastname = 'Gavric'

  let person = {
    name:'Aleksandar',
    lastname:'Stefanovski',
    age:25
  }
  return (
    <div className="app">
      <Navbar />
      <Title />

    </div>
  );
}

export default App;
