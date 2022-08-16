import React from "react";
// import Header from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Question from "../components/Questions";

const Home = () => {
  return (
    <div className="container">
        {/* <Header /> */}
        <Nav />

          <Question />

        <Footer />
    </div>
  );
};

export default Home;
