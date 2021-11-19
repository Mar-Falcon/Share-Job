import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddJobOffer, Categories, JobOffers, Login, Profile, SignUp, Users } from './page';


const App = () => {
  return (
  <Router>
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/sign-up" component={SignUp} />
    <Route path="/categories" component={Categories} />
    <Route path="/profile" component={Profile} />
    <Route path="/users" component={Users} />
    <Route path="/add-job-offer" component={AddJobOffer} />
    <Route path="/" component={JobOffers} />
  </Switch>
</Router>
);
};


export default App;
