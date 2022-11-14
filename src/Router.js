import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AddPost from "./pages/AddPost";
import AppPosts from "./pages/AppPosts";
import AppSinglePost from "./pages/AppSinglePost";

export default function Router() {
  return (
    <Switch>
      <Redirect exact from="/" to="/posts" />
      <Route exact path="/posts">
        <AppPosts />
      </Route>
      <Route path="/posts/:id">
        <AppSinglePost />
      </Route>
      <Route path="/add">
        <AddPost />
      </Route>
    </Switch>
  );
}
