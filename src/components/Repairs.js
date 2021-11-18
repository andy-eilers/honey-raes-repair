//Imports react and required listing from outside modules
import React from "react";
import { Route, Redirect } from "react-router-dom";
//no ".js" needed in React
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";
import "./Repairs.css";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
//exporting Repairs to browser in HTML
export const Repairs = () => (
    <>
      <Route
        render={() => {
          if (localStorage.getItem("honey_customer")) {
            return (
              <>
                <NavBar />
                <ApplicationViews />
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
  
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </>
  );