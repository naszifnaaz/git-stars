import { useEffect } from "react";
import "./App.css";
import { Feed } from "./components/Feed";
import { Filters } from "./components/Filters";
import { Header } from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "./redux/action";
import moment from "moment";

function App() {
  const dispatch = useDispatch();
  const language = useSelector((store) => store.language);
  const dateJump = useSelector((store) => store.dateJump);

  const endDate = moment().format("YYYY-MM-DDTHH:MM:SSZ");
  let startDate;
  let query = "";

  switch (dateJump) {
    case "daily":
      startDate = moment().subtract(1, "d").format("YYYY-MM-DDTHH:MM:SSZ");
      break;
    case "weekly":
      startDate = moment().subtract(1, "w").format("YYYY-MM-DDTHH:MM:SSZ");
      break;
    case "monthly":
      startDate = moment().subtract(1, "M").format("YYYY-MM-DDTHH:MM:SSZ");
      break;
    case "yearly":
      startDate = moment().subtract(1, "y").format("YYYY-MM-DDTHH:MM:SSZ");
      break;
    default:
      startDate = endDate;
      break;
  }

  query = formatDate(startDate, endDate);

  // Return date in GitHub API format
  function formatDate(startDate, endDate) {
    return `created${startDate}:end${endDate}`;
  }

  useEffect(() => {
    fetch(
      `https://api.github.com/search/repositories?q=${language}&sort=stars&order=desc`
    )
      .then((res) => res.json())
      .then((data) => dispatch(getRepos(data.items)));
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
