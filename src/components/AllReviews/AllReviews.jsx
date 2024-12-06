import React, { useContext } from "react";
import { MdStar } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FadeLoader } from "react-spinners";

const AllReviews = () => {
  const reviewsLoader = useLoaderData();
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <FadeLoader color="#36d7b7" loading={true} size={80} />
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-6">All Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviewsLoader.map((review) => (
          <div className="flex flex-col" key={review._id}>
            <div className="card border space-y-3 flex-grow h-fit bg-base-100 shadow-xl hover:scale-110 transition-transform duration-300">
              <figure>
                <img src={review.gameCover} alt={review.gameTitle} />
              </figure>
              <div className="p-5">
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <span className="underline font-bold text-xl">Title:</span>
                    <span className="text-lg">{review.gameTitle}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="underline font-bold text-xl">Rating:</span>
                    <p className="flex items-center gap-2">
                      <span className="text-lg">{review.rating}</span>
                      <span className="text-white bg-yellow-400 rounded-full">
                        <MdStar className="size-5" />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <p>
                    <span className="underline font-bold text-xl mr-2">
                      Year:
                    </span>
                    <span className="text-lg">{review.publishingYear}</span>
                  </p>
                  <p>
                    <span className="underline font-bold text-xl mr-2">
                      Genre:
                    </span>
                    <span className="text-lg">{review.genre}</span>
                  </p>
                </div>
                <div className="card-actions justify-center mt-5">
                  <Link to={`/reviews/${review._id}`}>
                    <button className="btn hover:scale-110 bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg transition-all duration-300">
                      Explore Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
