import "./App.css";
import Form1 from "./components/Form1/Form1";
import Form2 from "./components/Form2/Form2";
import Heading from "./components/Heading/Heading";

function App() {
  return (
    <div className="App">
      <Form2>
        <Heading bg2="#bde3ff" color2="blue" border2="#bde3ff" />
      </Form2>
    </div>
  );
}

export default App;
