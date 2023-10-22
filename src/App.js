import GlobeComponent from "./components/Globe/GlobeComponent";
import NavBar from "./components/NavBar/NavBar";
import SpeciesList from "./components/SpeciesList/SpeciesList";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <GlobeComponent/>
        </Route>
        <Route exact path="/species">
          <SpeciesList/>
        </Route>
      </Switch>
  </>
  );
}

export default App;
