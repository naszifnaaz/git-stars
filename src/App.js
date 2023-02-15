import { useEffect, useState } from "react";
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

  const [endDate, setEndDate] = useState(moment().format());
  const [startDate, setStartDate] = useState(
    moment().subtract(1, dateJump).format()
  );

  // Return date in GitHub API format
  function transformFilters({ startDate, endDate, language }) {
    const transformedFilters = {};

    const languageQuery = language ? `language:${language} ` : "";
    const dateQuery = `created:${startDate}..${endDate}`;

    transformedFilters.q = languageQuery + dateQuery;
    transformedFilters.sort = "stars";
    transformedFilters.order = "desc";

    return transformedFilters;
  }

  useEffect(() => {
    setEndDate(moment().subtract(1, "day").format());
    setStartDate(moment(endDate).subtract(1, dateJump).format());

    console.log(dateJump, startDate, endDate);

    const filters = transformFilters({ language, startDate, endDate });
    const filtersQuery = new URLSearchParams(filters).toString();

    fetch(`https://api.github.com/search/repositories?${filtersQuery}`)
      .then((res) => res.json())
      .then((data) => dispatch(getRepos(data.items)));
  }, [dispatch, language, dateJump, startDate, endDate]);

  return (
    <div className="App">
      <Header />
      <Filters />
      <Feed />
    </div>
  );
}

export default App;
