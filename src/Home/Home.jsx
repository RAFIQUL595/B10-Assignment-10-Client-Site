import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../components/Banner/Banner";
import TrendingGames from "../components/TrendingGames/TrendingGames";
import HighestRatedGames from "../components/HighestRatedGames/HighestRatedGames";
import { useLoaderData } from "react-router-dom";
import GameReleases from "../components/GameReleases/GameReleases";

const Home = () => {
  const highestRated=useLoaderData()
  return (
    <div>
      <Helmet>
        <title>Home | Chill Gamer</title>
      </Helmet>
      <Banner></Banner>
      <HighestRatedGames highestRated={highestRated}></HighestRatedGames>
      <TrendingGames></TrendingGames>
      <GameReleases></GameReleases>
    </div>
  );
};

export default Home;
