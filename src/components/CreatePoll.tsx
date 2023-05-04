import React, { useState } from "react";
import { Button } from "./buttons/Button";

export const CreatePoll: React.FC = () => {
  const [inputValues, setInputValues] = useState([""]);
  const [question, setQuestion] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // handle form submission here
  };

  const handleAddInput = () => {
    setInputValues([...inputValues, ""]);
  };

  const handleInputChange = (
    event: { target: { value: string } },
    index: number
  ) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
  };

  return (
    <div>
      Create a New Poll
      <form onSubmit={handleSubmit}>
        <div className="button-container ">
          <button type="button" onClick={handleAddInput}>
            Add Answer Options
          </button>
          <Button buttonText="Create Poll" type="submit" />
        </div>
        <div className="create-poll-container">
          <label>
            Question:
            <input
              type="text"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
            />
          </label>
          {inputValues.map((inputValue, index) => (
            <label key={index}>
              Answer {index + 1}:
              <input
                type="text"
                value={inputValue}
                onChange={(event) => handleInputChange(event, index)}
              />
            </label>
          ))}
        </div>
      </form>
    </div>
  );
};
