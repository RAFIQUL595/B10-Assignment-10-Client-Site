import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../components/Banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Chill Gamer</title>
      </Helmet>
      <Banner></Banner>
    </div>
  );
};

export default Home;
