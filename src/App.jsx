/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../src/components/navbar/index";
import Footer from "../src/components/footer";

// Pages
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import ForgetPage from "./pages/ForgetPage";
import VerifyPage from "./pages/VerifyPage";
import ResetPage from "./pages/ResetPage";
import AdvertPage from "./pages/AdvertPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signin" component={SignupPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/forget-password" component={ForgetPage} />
        <Route path="/verify-password" component={VerifyPage} />
        <Route path="/reset-password" component={ResetPage} />
        <Route path="/add-product" component={AdvertPage} />
        {/* Add other routes here */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;