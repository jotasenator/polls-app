import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { fetchPolls } from "../actions/actions";
import { RootState } from "../interfaces/crudInterface";
import { useAppDispatch } from "../redux/hook/useAppDispatch";
import { PollListItems } from "./PollListItems";

export const PollList: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPolls());
  }, [dispatch]);

  const polls = useSelector((state: RootState) => state.crudReducer.polls);

  return (
    <div>
      <PollListItems polls={polls} />
    </div>
  );
};
