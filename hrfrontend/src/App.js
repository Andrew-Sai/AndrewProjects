import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import HrEmployeeModel from "./Content/HrEmployeeForm.js";
import Home from "./Content/Home.js";
import Contact from "./Content/Contact.js"
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import Resume from "./Content/Resume.js"

export default function App() {
  return (
    <main>
        <div>
          <Switch>
            <Route exact path="/" component={withRouter(Home)} />
            <Route path="/resume" component={withRouter(Resume)} />
            <Route path="/hremployeemodel" component={withRouter(HrEmployeeModel)} />
            <Route path="/contact" component={withRouter(Contact)} />
          </Switch>
        </div>
    </main>
  )
}