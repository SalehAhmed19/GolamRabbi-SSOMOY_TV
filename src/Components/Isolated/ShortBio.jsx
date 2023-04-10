import React, { useState } from "react";

function ShortBio({ longText, maxChar }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  if (longText.length <= maxChar) {
    return <p>{longText}</p>;
  }
  return (
    <div>
      <p className="text-xl">
        {isExpanded ? longText : longText.slice(0, maxChar) + "..."}
      </p>
      <button className="font-bold my-5 text-primary" onClick={toggleExpanded}>
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}

export default ShortBio;
