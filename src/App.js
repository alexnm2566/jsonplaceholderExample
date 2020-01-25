import React, { useEffect } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import PostsList from "./Pages/PostsList";
import SinglePost from "./Pages/SinglePost";
import NotFound from "./Pages/NotFound";
//Redux
import { Provider } from "react-redux";
import store from "./store";
//Actions
import { loadPosts } from "./actions/post";

function App() {
  useEffect(() => {
    store.dispatch(loadPosts());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={PostsList} />
          <Route exact path='/post/:id' component={SinglePost} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
