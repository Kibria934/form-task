import { useState } from "react";
import "./App.css";
import Form from "./Form/Form";
import FormList from "./Form/FormList";

function App() {
  const [info, setInfo] = useState([]);

  return (
    <div className="App">
      <header style={{ marginTop: "20px" }}>
        <Form info={info} setInfo={setInfo} />
      </header>
      <section className="form_list">
        <FormList info={info} />
      </section>
    </div>
  );
}

export default App;
