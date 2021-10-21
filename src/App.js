import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import AuthProvider from "./context/AuthProvider";
import Service1 from "./components/Services/Service1";
import Service2 from "./components/Services/Service2";
import Service3 from "./components/Services/Service3";
import Service4 from "./components/Services/Service4";
import Service5 from "./components/Services/Service5";
import Service6 from "./components/Services/Service6";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/service1">
              <Service1></Service1>
            </PrivateRoute>
            <PrivateRoute path="/service2">
              <Service2></Service2>
            </PrivateRoute>
            <PrivateRoute path="/service3">
              <Service3></Service3>
            </PrivateRoute>
            <PrivateRoute path="/service4">
              <Service4></Service4>
            </PrivateRoute>
            <PrivateRoute path="/service5">
              <Service5></Service5>
            </PrivateRoute>
            <PrivateRoute path="/service6">
              <Service6></Service6>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
