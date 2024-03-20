import "./App.css";
import Form1 from "./components/Form1/Form1";
import Form2 from "./components/Form2/Form2";
import Form3 from "./components/Form3/Form3";
import Heading from "./components/Heading/Heading";

function App() {
  return (
    <div className="App">
      <Form3>
        <Heading bg3="#bde3ff" color3="blue" border3="#bde3ff" />
      </Form3>
    </div>
  );
}

export default App;
