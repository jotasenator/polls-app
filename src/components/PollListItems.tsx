import React from "react";
import { State } from "../interfaces/crudInterface";
import { sweetCenterFailure, sweetCenterSuccess } from "../helpers/sweetAlert";

export const PollListItems: React.FC<State> = ({ polls }) => {
  const handleAnswer = (correct: boolean) => {
    correct
      ? sweetCenterSuccess("Correct answer")
      : sweetCenterFailure("Wrong answer");
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
        </li>
      ))}
    </ul>
  );
};
