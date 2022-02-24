import {Dataprovider} from './context/DataContext';
import NavbarComponents from "../src/Components/NavbarComponent";
import Header from "./Components/Header";
import SortingAreaComponent from "./Components/SortingAreaComponent";

function App() {
  return (
    <div className="App">
      <Dataprovider>
        {/* <NavbarComponents/> */}
        <Header/>
        <SortingAreaComponent/>
      </Dataprovider>
    </div>
  );
}

;

export default App;
