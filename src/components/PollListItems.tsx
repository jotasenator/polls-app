import React from "react";
import { State } from "../interfaces/crudInterface";

export const PollListItems: React.FC<State> = ({ polls }) => {
  const handleAnswer = (correct: boolean) => {
    correct ? alert("Correct answer") : alert("Wrong answer");
  };

  return (
    <ul>
      {polls.map(({ _id, options, question }) => (
        <li key={_id}>
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
