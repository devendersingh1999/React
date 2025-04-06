import React, { useState } from "react";

const A = () => {
  // Array to store aspects and their upvote/downvote counts
  const [feedbacks, setFeedbacks] = useState([
    { aspect: "Readability", upvotes: 0, downvotes: 0 },
    { aspect: "Performance", upvotes: 0, downvotes: 0 },
    { aspect: "Security", upvotes: 0, downvotes: 0 },
    { aspect: "Documentation", upvotes: 0, downvotes: 0 },
    { aspect: "Testing", upvotes: 0, downvotes: 0 }
  ]);

  // Update upvote/downvote for a specific aspect
  const handleVote = (index, type) => {
    setFeedbacks((prevFeedbacks) => {
      const updatedFeedbacks = [...prevFeedbacks];
      if (type === "upvote") {
        updatedFeedbacks[index].upvotes += 1;
      } else if (type === "downvote") {
        updatedFeedbacks[index].downvotes += 1;
      }
      return updatedFeedbacks;
    });
  };

  return (
    <>
      {feedbacks.map((feedback, index) => (
        <div className="my-0 mx-auto text-center w-mx-1200" key={index}>
          <div className="flex wrap justify-content-center mt-30 gap-30">
            <div className="pa-10 w-300 card">
              <h2>{feedback.aspect}</h2>
              <div className="flex my-30 mx-0 justify-content-around">
                <button
                  className="py-10 px-15"
                  data-testid={`upvote-btn-${index + 1}`}
                  onClick={() => handleVote(index, "upvote")}
                >
                  👍 Upvote
                </button>
                <button
                  className="py-10 px-15 danger"
                  data-testid={`downvote-btn-${index + 1}`}
                  onClick={() => handleVote(index, "downvote")}
                >
                  👎 Downvote
                </button>
              </div>
              <p className="my-10 mx-0" data-testid={`upvote-count-${index + 1}`}>
                Upvotes: <strong>{feedback.upvotes}</strong>
              </p>
              <p className="my-10 mx-0" data-testid={`downvote-count-${index + 1}`}>
                Downvotes: <strong>{feedback.downvotes}</strong>
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default A;
