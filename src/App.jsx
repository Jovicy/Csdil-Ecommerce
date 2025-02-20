import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../src/components/navbar/index";
import Footer from "../src/components/footer";
import ConstructionModal from "./components/ConstructionModal"; // Import modal

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SignupPage from "./pages/SignupPage";
import ForgetPage from "./pages/ForgetPage";
import VerifyPage from "./pages/VerifyPage";
import ResetPage from "./pages/ResetPage";
import AdvertPage from "./pages/AdvertPage";
import CustomerPage from "./pages/CustomerPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <Navbar />
      <ConstructionModal /> {/* Modal always showing */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about-us" component={AboutPage} />
        <Route path="/customer-support" component={CustomerPage} />
        <Route path="/signin" component={SignupPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/forget-password" component={ForgetPage} />
        <Route path="/error-page" component={ErrorPage} />
        <Route path="/verify-password" component={VerifyPage} />
        <Route path="/reset-password" component={ResetPage} />
        <Route path="/add-product" component={AdvertPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
