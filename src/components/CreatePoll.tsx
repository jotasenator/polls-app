import React, { useState } from "react";
import { Button } from "./buttons/Button";
import { createPoll } from "../actions/actions";
import { useAppDispatch } from "../redux/hook/useAppDispatch";
import { Poll } from "../interfaces/crudInterface";
import { v4 as uuidv4 } from "uuid";

import { useNavigate } from "react-router-dom";

import { sweetTopEndWarning } from "../helpers/sweetAlert";

export const CreatePoll: React.FC = () => {
  const dispatch = useAppDispatch();

  const [question, setQuestion] = useState("");
  const [inputValues, setInputValues] = useState([
    { text: "", isCorrect: false },
  ]);

  const navigate = useNavigate();

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const poll: Poll = {
      id: uuidv4(),
      question,
      options: inputValues.map((option, index) => ({
        id: index + 1,
        ...option,
      })),
    };
    if (question === "") {
      sweetTopEndWarning("Please enter a question.");
    } else if (inputValues.map((x) => x.text).includes("")) {
      sweetTopEndWarning("Please fill in all answer options.");
    } else if (!inputValues.map((x) => x.isCorrect).includes(true)) {
    } else if (inputValues.length < 2) {
      sweetTopEndWarning("Please create at least to questions.");
    } else if (!inputValues.map((x) => x.isCorrect).includes(true)) {
      sweetTopEndWarning("Please select at least one correct answer.");
    } else {
      dispatch(createPoll(poll));
      navigate("/");
    }
  };

  const handleAddInput = () => {
    if (question === "") {
      sweetTopEndWarning("Please enter a question.");
    } else if (inputValues.map((x) => x.text).includes("")) {
      sweetTopEndWarning("Please fill in all answer options.");
    } else {
      setInputValues([...inputValues, { text: "", isCorrect: false }]);
    }
  };

  const handleInputChange = (
    event: { target: { value: string } },
    index: number
  ) => {
    const newInputValues = [...inputValues];
    newInputValues[index].text = event.target.value;
    setInputValues(newInputValues);
  };

  const handleCheckboxChange = (index: number) => {
    if (inputValues[index].text === "") {
      sweetTopEndWarning("Please fill the answer option.");
      return;
    }
    const newInputValues = [...inputValues];
    newInputValues[index].isCorrect = !newInputValues[index].isCorrect;
    setInputValues(newInputValues);
  };

  const handleDeleteInputValue = (index: number) => {
    const newInputValues = [...inputValues];
    newInputValues.splice(index, 1);
    setInputValues(newInputValues);
  };

  const isDisabled: boolean = [...inputValues].length <= 1;

  const buttonDeleteInputStyle: React.CSSProperties = isDisabled
    ? { cursor: "not-allowed" }
    : {};

  const handleSkip = () => {
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="button-container ">
          <h2>Create a New Poll</h2>
          <div>
            <Button
              buttonText="Add Answer Options"
              type="button"
              onClick={handleAddInput}
            />
            <Button buttonText="Submit Poll" type="submit" />
            <Button buttonText="Skip" type="button" onClick={handleSkip} />
          </div>
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
              <div>
                <input
                  type="text"
                  value={inputValue.text}
                  onChange={(event) => handleInputChange(event, index)}
                />
                <input
                  type="checkbox"
                  checked={inputValue.isCorrect}
                  onChange={() => handleCheckboxChange(index)}
                />
                <Button
                  buttonText={<i>🗑️</i>}
                  type="button"
                  onClick={() => handleDeleteInputValue(index)}
                  disabled={isDisabled}
                  style={buttonDeleteInputStyle}
                />
              </div>
            </label>
          ))}
        </div>
      </form>
    </div>
  );
};
