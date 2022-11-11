import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AppPosts from "./pages/AppPosts";

export default function Router() {
  return (
    <Switch>
      <Redirect exact from="/" to="/posts" />
      <Route path="/posts">
        <AppPosts />
      </Route>
    </Switch>
  );
}
