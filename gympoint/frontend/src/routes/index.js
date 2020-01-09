import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Routes";

import SignIn from "../pages/SignIn";

import Students from "../pages/Students";
import NewStudent from "../pages/NewStudent";
import EditStudent from "../pages/EditStudent";

import Plans from "../pages/Plans";
import NewPlan from "../pages/NewPlan";
import EditPlan from "../pages/EditPlan";

import Enrollments from "../pages/Enrollments";
import NewEnrollment from "../pages/NewEnrollment";
import EditEnrollment from "../pages/EditEnrollment";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/students" component={Students} isPrivate />
      <Route path="/new-student" component={NewStudent} isPrivate />
      <Route path="/edit-student" component={EditStudent} isPrivate />

      <Route path="/plans" component={Plans} isPrivate />
      <Route path="/new-plan" component={NewPlan} isPrivate />
      <Route path="/edit-plan" component={EditPlan} isPrivate />

      <Route path="/enrollments" component={Enrollments} isPrivate />
      <Route path="/new-enrollment" component={NewEnrollment} isPrivate />
      <Route path="/edit-enrollment" component={EditEnrollment} isPrivate />
    </Switch>
  );
}
