import "./App.css";
import { Feed } from "./components/Feed";
import { Filters } from "./components/Filters";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Filters />
      <Feed />
    </div>
  );
}

export default App;
