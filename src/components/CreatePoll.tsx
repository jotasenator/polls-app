import React, { useState } from "react";
import { Button } from "./buttons/Button";
import { createPoll, increaseAction } from "../actions/actions";
import { useAppDispatch } from "../redux/hook/useAppDispatch";
import { Poll } from "../interfaces/crudInterface";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

export const CreatePoll: React.FC = () => {
  const dispatch = useAppDispatch();
  const { value } = useSelector((state: any) => state.increaseReducer);

  const [question, setQuestion] = useState("");
  const [inputValues, setInputValues] = useState([
    { text: "", isCorrect: false },
  ]);

  const navigate = useNavigate();

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const poll: Poll = {
      id: value,
      question,
      options: inputValues.map((option, index) => ({
        id: index + 1,
        ...option,
      })),
    };
    dispatch(createPoll(poll));
    dispatch(increaseAction());
    navigate("/");
  };

  const handleAddInput = () => {
    setInputValues([...inputValues, { text: "", isCorrect: false }]);
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
    const newInputValues = [...inputValues];
    newInputValues[index].isCorrect = !newInputValues[index].isCorrect;
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
              </div>
            </label>
          ))}
        </div>
      </form>
    </div>
  );
};
