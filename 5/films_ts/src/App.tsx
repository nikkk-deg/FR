import { FilterProvider } from "./Filters/Context";
import Filters from "./Filters/Filters";
import Header from "./Header";


function App() {
  return(
    <div id="mainContent">
      <FilterProvider>
        <Header></Header>
        <Filters></Filters>
      </FilterProvider>
      
    
    </div>
  );
}

export default App;