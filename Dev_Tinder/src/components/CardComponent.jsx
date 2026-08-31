import React from "react";

const CardComponent = ({ feedSelector }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {feedSelector && feedSelector.length > 0 ? (
        feedSelector.map(
          ({ photoUrl, firstName, lastName, about, _id }) => (
            <div
              key={_id}
              className="card bg-neutral text-neutral-content w-80 shadow-xl overflow-hidden"
            >
              <figure className="h-72 bg-base-300">
                <img
                  src={
                    photoUrl ||
                    "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  }
                  alt={firstName}
                  className="w-full h-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title text-lg">
                  {firstName} {lastName}
                </h2>

                <p className="text-sm opacity-80">
                  {about || "This is a default about of the user!"}
                </p>

                <div className="card-actions justify-center mt-4">
                  <button className="btn btn-primary">
                    Ignore
                  </button>

                  <button className="btn btn-secondary">
                    Interested
                  </button>
                </div>
              </div>
            </div>
          )
        )
      ) : (
        <p>Explore More</p>
      )}
    </div>
  );
};

export default CardComponent;