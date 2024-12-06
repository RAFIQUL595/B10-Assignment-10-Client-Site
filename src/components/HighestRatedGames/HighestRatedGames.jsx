import React, { useContext, useEffect } from "react";
import { FadeLoader } from "react-spinners";
import { AuthContext } from "../AuthProvider/AuthProvider";

import { MdStar } from "react-icons/md";

const HighestRatedGames = ({ highestRated }) => {
  const { loading } = useContext(AuthContext);

  return (
    <div className="w-11/12 mx-auto mb-10">
      <h2 className="text-center text-3xl font-bold">Highest Rated Games</h2>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {loading ? (
          <div className="flex justify-center">
            <FadeLoader color="#36d7b7" loading={true} size={80} />
          </div>
        ) : highestRated && highestRated.length > 0 ? (
          highestRated.map((game) => (
            <div className="flex flex-col" key={game._id}>
              <div className="card space-y-3 flex-grow h-fit bg-base-100 shadow-xl hover:scale-110 transition-transform duration-300">
                <figure>
                  <img src={game.gameCover} alt={game.gameTitle} />
                </figure>
                <div className="p-5">
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <span className="underline font-bold text-xl">
                        Title:
                      </span>
                      <span className="text-lg">{game.gameTitle}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="underline font-bold text-xl">
                        Rating:
                      </span>
                      <p className="flex items-center gap-2">
                        <span className="text-lg">{game.rating}</span>{" "}
                        <span className="text-white bg-yellow-400 rounded-full">
                          <MdStar className="size-5" />
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="card-actions justify-center mt-5">
                    <button className="btn hover:scale-110 bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg transition-all duration-300">
                      Explore Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-2xl font-bold text-center">
            No rated games available
          </p>
        )}
      </div>
    </div>
  );
};

export default HighestRatedGames;
