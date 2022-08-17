import React from "react";
import { Link } from 'react-router-dom';
// import Header from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Question from "../components/Questions";

// load the Auth setup for the page
import Auth from '../utils/auth';

const Home = () => {
  return (
    <div className="container">
        {/* <Header /> */}
        <Nav />
        <div className="row">
                        <div className="col-12 text-center mt-3">
                            <img src="/images/Logo3.png" alt="large logo" className="img w-100"></img>
                        </div>
                    </div>
        {Auth.loggedIn() ? (
          <Question />
          ) : (
        <p className="text-center">
          You need to be logged in to play this game. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
        <Footer />
    </div>
  );
};

export default Home;
