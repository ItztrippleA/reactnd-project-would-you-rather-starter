import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../redux/actions/shared";
import LoadingBar from "react-redux-loading";
import Header from "./Nav";
import Login from "./Login";
import Questions from "./PollDetails";
import Question from "./Poll";
import Leaderboard from "./LeaderBoard";
import Add from "./AddPoll";
import NotFound from "./PageNotFound";
import Logout from "./Logout";
import "../materialize/materialize.min.css";
//import './materialize/materialize.min.js';
import "../App.css";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <LoadingBar style={{ backgroundColor: "#25baa2", height: "3px" }} />
          <Header />

          <Switch>
            <Route path="/login" component={Login} />
            <VerifyRoute exact path="/" component={Questions} />
            <VerifyRoute
              exact
              path="/questions/:question_id"
              component={Question}
            />
            <VerifyRoute exact path="/leaderboard" component={Leaderboard} />
            <VerifyRoute exact path="/add" component={Add} />
            <Route exact path="/logout" component={Logout} />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

const VerifyRoute = connect(mapStateToProps)(
  ({ component: Component, authedUser, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        authedUser !== null ? (
          <Component {...props} />
        ) : (
          <Redirect push to="/login" />
        )
      }
    />
  )
);

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
