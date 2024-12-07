import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const reviews = useLoaderData();

  return (
    <div className="p-6 w-11/12 mx-auto">
      <Helmet>
        <title>My Reviews | Chill Gamer</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-center mb-6">My Reviews</h1>
      {reviews.length === 0 ? (
        <p className="text-xl font-bold">
          You have no reviews yet. Start adding your favorites!
        </p>
      ) : (
        <div className="overflow-x-auto md:w-4/6 mx-auto">
          <table className="table border border-gray-300 w-full table-zebra">
            <thead className="text-lg">
              <tr>
                <th>#</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Game Title</th>
                <th>Genre</th>
              </tr>
            </thead>
            <tbody className="text-lg">
              {reviews.map((review, index) => (
                <tr key={review._id}>
                  <td>{index + 1}</td>
                  <td>{review.userName}</td>
                  <td>{review.userEmail}</td>
                  <td>{review.gameTitle}</td>
                  <td className="py-2 px-4 text-center">
                    <button className="bg-blue-500 text-white py-1 px-3 rounded mr-2 hover:bg-blue-600">
                      Update
                    </button>
                    <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
