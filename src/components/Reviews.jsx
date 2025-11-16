import React from "react";
import reviewsData from "../data/reviews";

const Reviews = () => {
  return (
    <section className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Users Say</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviewsData.map((review) => (
          <div
            key={review.id}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center"
          >
            <img
              src={review.avatar}
              alt={review.name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">{review.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{review.role}</p>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
