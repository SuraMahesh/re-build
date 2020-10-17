import React from 'react';
import './App.css';
import Header from "./components/Common/Header";
import Home from "./components/Common/Home";
import Dashboard from './components/Dashboard/PublicProfile';
import Login from "./components/Login/Login";
import Publish from "./components/Publish/Publish";
import Account from "./components/Dashboard/Account";
import PublicProfile from "./components/Dashboard/PublicProfile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from './components/Contact/Contact';
import Vehicles from './components/Category/Vehicles/Vehicles';
import Electronic from "./components/Category/Electronics/Electronics";
import Property from "./components/Category/Property/Property";
import Jobs from "./components/Category/Jobs/Jobs";
import HandG from "./components/Category/Home & Gardens/HandG";
import Education from './components/Category/Education/Education';
import Footer from './components/Common/Footer';
import Cars from "./components/Category/Vehicles/VehicleType/Cars";
import Van from "./components/Category/Vehicles/VehicleType/Van";
import Motorbikes from './components/Category/Vehicles/VehicleType/Motorbikes';
import Domestic from './components/Category/Electronics/ElectronicsTypes/Domestic';
import Laptop from "./components/Category/Electronics/ElectronicsTypes/Laptop";
import Phone from "./components/Category/Electronics/ElectronicsTypes/Phone";
import PartTime from './components/Category/Jobs/JobType/PartTime';
import FullTime from './components/Category/Jobs/JobType/FullTime';
import Alerts from "./components/Dashboard/Alerts";
import Payment from "./components/Dashboard/Payment";
import Mountaint from './components/Category/Home & Gardens/H&GType/Mountaint';
import Village from './components/Category/Home & Gardens/H&GType/Village';
import Lands from "./components/Category/Property/Type/Lands";
import Commercial from "./components/Category/Property/Type/Commercial";
import Tuition from "./components/Category/Education/Type/Tuition";
import Books from "./components/Category/Education/Type/Books";



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Router path="/login">
            <Login />
          </Router>
          <Router path="/dashboard">
            <Header />
            <Dashboard />
            <Footer />
          </Router>
          <Router path="/publish">
            <Header />
            <Publish />
            <Footer />
          </Router>
          <Router path="/contact">
            <Header />
            <Contact />
            <Footer />
          </Router>
          <Router path="/account">
            <Header />
            <Account />
            <Footer />
          </Router>
          <Router path="/vehicles">
            <Header />
            <Vehicles />
            <Footer />
          </Router>
          <Router path="/electronic">
            <Header />
            <Electronic />
            <Footer />
          </Router>
          <Router path="/property">
            <Header />
            <Property />
            <Footer />
          </Router>
          <Router path="/jobs">
            <Header />
            <Jobs />
            <Footer />
          </Router>
          <Router path="/HandG">
            <Header />
            <HandG />
            <Footer />
          </Router>
          <Router path="/education">
            <Header />
            <Education />
            <Footer />
          </Router>
          <Router path="/publicprofile">
            <Header />
            <PublicProfile />
            <Footer />
          </Router>
          <Router path="/cars">
            <Header />
            <Cars />
            <Footer />
          </Router>
          <Router path="/van">
            <Header />
            <Van />
            <Footer />
          </Router>
          <Router path="/motorbikes">
            <Header />
            <Motorbikes />
            <Footer />
          </Router>
          <Router path="/domestic">
            <Header />
            <Domestic />
            <Footer />
          </Router>
          <Router path="/laptop">
            <Header />
            <Laptop />
            <Footer />
          </Router>
          <Router path="/phone">
            <Header />
            <Phone />
            <Footer />
          </Router>
          <Router path="/parttime">
            <Header />
            <PartTime />
            <Footer />
          </Router>
          <Router path="/fulltime">
            <Header />
            <FullTime />
            <Footer />
          </Router>
          <Router path="/alert">
            <Header />
            <Alerts />
            <Footer />
          </Router>
          <Router path="/payment">
            <Header />
            <Payment />
            <Footer />
          </Router>
          <Router path="/mountaint">
            <Header />
            <Mountaint />
            <Footer />
          </Router>
          <Router path="/village">
            <Header />
            <Village />
            <Footer />
          </Router>
          <Router path="/land">
            <Header />
            <Lands />
            <Footer />
          </Router>
          <Router path="/commercial">
            <Header />
            <Commercial />
            <Footer />
          </Router>
          <Router path="/tuition">
            <Header />
            <Tuition />
            <Footer />
          </Router>
          <Router path="/books">
            <Header />
            <Books />
            <Footer />
          </Router>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
