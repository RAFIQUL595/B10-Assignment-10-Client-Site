import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../components/Banner/Banner";
import TrendingGames from "../components/TrendingGames/TrendingGames";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Chill Gamer</title>
      </Helmet>
      <Banner></Banner>
      <TrendingGames></TrendingGames>
    </div>
  );
};

export default Home;
