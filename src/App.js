import { useEffect } from "react";
import "./App.css";
import { Feed } from "./components/Feed";
import { Filters } from "./components/Filters";
import { Header } from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getRepos, setLoading, removeLoading } from "./redux/action";
import moment from "moment";

function App() {
  const dispatch = useDispatch();
  const language = useSelector((store) => store.language);
  const dateJump = useSelector((store) => store.dateJump);

  let endDate = moment().format();
  let startDate = moment(endDate).subtract(1, dateJump).format();

  useEffect(() => {
    async function fetchRepos() {
      dispatch(setLoading());
      const res = await fetch(
        `https://api.github.com/search/repositories?q=all+language:${language}&sort=stars&order=desc`
      );
      const data = await res.json();
      dispatch(getRepos(data.items));
      dispatch(removeLoading());
    }
    fetchRepos();
  }, [dispatch, language, dateJump]);

  return (
    <div className="App">
      <Header />
      <Filters />
      <Feed />
    </div>
  );
}

export default App;
