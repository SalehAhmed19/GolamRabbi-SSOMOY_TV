import React from "react";

const BlogContent = ({ blogContent }) => {
  const sentences = blogContent.split("। "); // Split the content into an array of sentences
  console.log(sentences);
  const groupedSentences = sentences.reduce(
    (result, sentence, index) => {
      if (index % 5 === 0) {
        // Check if this is the first sentence in a group of five
        result.push(""); // Add a new empty string to the result array
      }

      const groupIndex = Math.floor(index / 5); // Calculate the index of the current group
      result[groupIndex] += sentence; // Add the current sentence to the current group

      if (index % 5 !== 4) {
        // Check if this is not the last sentence in a group of five
        result[groupIndex] += "। "; // Add a full stop to the current sentence
      }
      console.log(result);
      return result;
    },
    [""]
  ); // Start with an array containing an empty string as the first group

  return (
    <div className="text-[#bbbbbb]">
      {groupedSentences.map((group, index) => (
        <React.Fragment key={index}>
          <p className="2xs:text-[12px]">{group}</p>
          {index % 5 === 4 && <br />}{" "}
          {/* Add a line break after every group of five */}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BlogContent;
