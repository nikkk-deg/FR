import { STRINGS } from "./view.js";
import Form from "./Form.js";


function App() {

  return(
    <div>
      <h1>{STRINGS.mainName}</h1>
      <h2>{STRINGS.title}</h2>
      <Form></Form>
    </div>
  );
}

export default App;
