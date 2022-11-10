import React from "react";
import { Switch, Route } from "react-router-dom";
import AppPosts from "./pages/AppPosts";

export default function Router() {
  return (
    <Switch>
      <Route path="/posts">
        <AppPosts />
      </Route>
    </Switch>
  );
}
