import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Auth components
import Signup from "./containers/auth/Signup";
import Login from "./containers/auth/Login";
import Check from "./containers/auth/check";
import Confirm from "./containers/auth/ConfirmAccount";
import Reset from "./containers/auth/Reset";
import ResetRequest from "./containers/auth/ResetRequest";

// Home components
import Home from "./containers/home/Home";

// Post components
import SinglePost from "./containers/post/singlepost/SinglePost";
import Create from "./containers/post/create/Create";
import Edit from "./containers/post/edit/Edit";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          {/* AUTH ROUTES */}
          <Route path={["/signup", "/register"]} component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/cc" component={Check} />
          <Route path="/confirm/:verificationcode" component={Confirm} />
          <Route path="/password-reset" exact component={ResetRequest} />
          <Route
            path="/auth/password-reset/:userId/:token"
            exact
            component={Reset}
          />

          {/* HOME ROUTES */}
          <Route path="/" exact component={Home} />

          {/* POST ROUTES */}
          <Route path="/view/:id" exact component={SinglePost} />
          <Route path="/create" component={Create} />
          <Route path="/edit/:id" component={Edit} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
