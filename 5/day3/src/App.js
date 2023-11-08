import Form from "./Form";
const mainContentClass = "mainContent";


function App() {
  return (
    <div className="App">
      <div className={mainContentClass}>
        <Form isRegistration={true}/>
      </div>
    </div>
  );
}

export default App;
