import React, { useEffect } from "react";
import { localeDate } from "../helpers/localeDate";

import { useSelector } from "react-redux";
import { fetchPolls } from "../actions/actions";
import { RootState } from "../interfaces/crudInterface";
import { useAppDispatch } from "../redux/hook/useAppDispatch";

export const PollList: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPolls());
  }, [dispatch]);

  const polls = useSelector((state: RootState) => state.crudReducer.polls);

  return (
    <div>
      {
        <ul>
          {polls?.map(({ _id, title, description, creator, createdAt }) => (
            <li key={_id}>
              <h3>{title}</h3>
              <p>{description}</p>
              <p>Created By: {creator}</p>
              <p>Created at: {localeDate(createdAt)}</p>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};
