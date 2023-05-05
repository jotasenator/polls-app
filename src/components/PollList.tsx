import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { fetchPolls } from "../actions/actions";
import { RootState } from "../interfaces/crudInterface";
import { useAppDispatch } from "../redux/hook/useAppDispatch";
import { PollListItems } from "./PollListItems";
import { useNavigate } from "react-router-dom";
import { Button } from "./buttons/Button";

export const PollList: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPolls());
  }, [dispatch]);

  const polls = useSelector((state: RootState) => state.crudReducer.polls);

  const navigate = useNavigate();
  const handleCreatePoll = () => {
    navigate("/create");
  };

  return (
    <div>
      <div className="button-container ">
        <h2>Enjoy your polls!</h2>
        <Button
          buttonText="Create Poll"
          type="button"
          onClick={handleCreatePoll}
        />
      </div>
      <div className="container">
        {[...polls].length === 0 && <h2>Create a poll</h2>}
        <PollListItems polls={polls} />
      </div>
    </div>
  );
};
