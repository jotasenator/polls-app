import React, { useEffect } from "react";
import { localeDate } from "../helpers/localeDate";

import { useDispatch, useSelector } from "react-redux";
import { fetchPulls } from "../actions/actions";
import { RootState } from "../interfaces/crudInterface";

export const PullList: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPulls());
  }, [dispatch]);

  const pulls = useSelector((state: RootState) => state.crudReducer.pulls);

  return (
    <div>
      {
        <ul>
          {pulls?.map(({ _id, title, description, creator, createdAt }) => (
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
