import React from "react";
import { State } from "../interfaces/crudInterface";
import { sweetCenterFailure, sweetCenterSuccess } from "../helpers/sweetAlert";
import { Button } from "./buttons/Button";
import { useAppDispatch } from "../redux/hook/useAppDispatch";
import { deletePoll, fetchPolls } from "../actions/actions";

import { useNavigate } from "react-router-dom";

export const PollListItems: React.FC<State> = ({ polls }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleAnswer = (correct: boolean) => {
    correct
      ? sweetCenterSuccess("Correct answer")
      : sweetCenterFailure("Wrong answer");
  };

  const handleDeleteInputValue = async (index: string) => {
    await dispatch(deletePoll(index));
    await dispatch(fetchPolls());
  };

  const handleNavigateToSelectedPoll = (id: string) => {
    navigate(`/update/${id}`);
  };

  return (
    <ul>
      {polls.map(({ id, options, question }) => (
        <li key={id}>
          <h3>{question}</h3>
          <ul>
            {options.map(({ id, text, isCorrect }) => (
              <li
                className="options-list"
                onClick={() => handleAnswer(isCorrect)}
                key={id}
              >
                {text}
              </li>
            ))}
          </ul>
          <Button
            buttonText={<i>✏️</i>}
            type="button"
            onClick={() => handleNavigateToSelectedPoll(id)}
          />
          <Button
            buttonText={<i>🗑️</i>}
            type="button"
            onClick={() => handleDeleteInputValue(id)}
          />
        </li>
      ))}
    </ul>
  );
};
