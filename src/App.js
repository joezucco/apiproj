import './App.css';

function App() {

//making API call
  
  const apiKey = "ea594e0d14f44a68a6724033213004";

  const city = "Boston"

  const [phase, setPhase] = useState(null)

  const getPhase = async () => {
    const response = await fetch(
      "api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}"
    );
    const data = await response.json()
    setPhase(data)
  }

  console.log("hello")

  return (
    <div className="App">

    </div>
  );
}

export default App;
