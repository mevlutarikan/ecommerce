import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Signup} from "./components/Signup";
import {Layout} from "./components/Layout";
import { Login } from "./components/Login";

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />

          {/* <Route component={NotFound} /> */}
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
