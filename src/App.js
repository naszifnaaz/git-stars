import { useEffect } from "react";
import "./App.css";
import { Feed } from "./components/Feed";
import { Filters } from "./components/Filters";
import { Header } from "./components/Header";
import { useDispatch } from "react-redux";
import { getRepos } from "./redux/action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://api.github.com/search/repositories?q=sort=stars&order=desc`)
      .then((res) => res.json())
      .then((data) => dispatch(getRepos(data.items)));
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <Filters />
      <Feed />
    </div>
  );
}

export default App;
