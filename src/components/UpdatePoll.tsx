import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useAppDispatch } from "../redux/hook/useAppDispatch";
import { fetchOnePoll, updatePoll } from "../actions/actions";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../interfaces/crudInterface";

import { useNavigate } from "react-router-dom";

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
    id &&
      dispatch(
        updatePoll(id, { id: id, question: question, options: options })
      );
    navigate("/");
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="button-container ">
          <h2>Update the Poll</h2>
          <button type="submit">Update Poll</button>
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
          <br />
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
              </div>
            </label>
          ))}
        </div>
      </form>
    </div>
  );
};
