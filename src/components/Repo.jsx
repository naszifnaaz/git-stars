import { Grid } from "./Grid";
import { useSelector } from "react-redux";
import { List } from "./List";

export const Repo = (props) => {
  const { repo } = props;
  const viewStyle = useSelector((store) => store.viewStyle);

  return (
    <>{viewStyle === "grid" ? <Grid repo={repo} /> : <List repo={repo} />}</>
  );
};
