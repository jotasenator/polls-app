import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useAppDispatch } from "../redux/hook/useAppDispatch";
import { fetchOnePoll, updatePoll } from "../actions/actions";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../interfaces/crudInterface";

import { useNavigate } from "react-router-dom";
import { Button } from "./buttons/Button";
import { sweetTopEndWarning } from "../helpers/sweetAlert";

export const UpdatePoll: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  useEffect(() => {
    id && dispatch(fetchOnePoll(id));
  }, [dispatch]);

  const poll = useSelector((state: RootState) => state.crudReducer.poll);

  useEffect(() => {
    setQuestion(poll?.question || "");
    setOptions(poll?.options || []);
  }, [poll]);

  const [question, setQuestion] = useState(poll?.question || "");
  const [options, setOptions] = useState(poll?.options || []);

  const handleQuestionChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setQuestion(event.target.value);
  };

  const handleOptionChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    event.preventDefault();
    const updatedOptions = options.map((option, i) =>
      i === index ? { ...option, text: event.target.value } : option
    );
    setOptions(updatedOptions);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (question === "") {
      sweetTopEndWarning("Please enter a question.");
    } else if (options.map((x) => x.text).includes("")) {
      sweetTopEndWarning("Please fill in all answer options.");
    } else if (options.length < 2) {
      sweetTopEndWarning("Please create at least two questions.");
    } else if (!options.map((x) => x.isCorrect).includes(true)) {
      sweetTopEndWarning("Please select at least one correct answer.");
    } else {
      id &&
        dispatch(
          updatePoll(id, { id: id, question: question, options: options })
        );
      navigate("/");
    }
  };

  const handleIsCorrectChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedOptions = options.map((option, i) =>
      i === index ? { ...option, isCorrect: event.target.checked } : option
    );
    setOptions(updatedOptions);
  };

  const handleAddOption = () => {
    const newOption = {
      id: Date.now(),
      text: "",
      isCorrect: false,
    };
    setOptions([...options, newOption]);
  };

  const handleDeleteInputValue = (index: number) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  const isDisabled: boolean = [...options].length <= 1;

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
          <h2>Update the Poll</h2>
          <div>
            <Button
              buttonText="Add Option"
              type="button"
              onClick={handleAddOption}
            />
            <Button buttonText="Update Poll" type="submit" />
            <Button buttonText="Skip" type="button" onClick={handleSkip} />
          </div>
        </div>
        <div className="create-poll-container">
          <label>
            Question:
            <input
              type="text"
              value={question}
              onChange={handleQuestionChange}
            />
          </label>
          {options.map((option, index) => (
            <label key={option.id} style={{ display: "flex" }}>
              Option {index + 1}:
              <div>
                <input
                  type="text"
                  value={option.text}
                  onChange={(event) => handleOptionChange(event, index)}
                />
                <input
                  type="checkbox"
                  checked={option.isCorrect}
                  onChange={(event) => handleIsCorrectChange(event, index)}
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
