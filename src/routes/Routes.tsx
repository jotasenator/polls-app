import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { PollList } from "../components/PollList";
import { CreatePoll } from "../components/CreatePoll";
import { UpdatePoll } from "../components/UpdatePoll";

export const RoutesComponent: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<PollList />} />
          <Route path="/create" element={<CreatePoll />} />
          <Route path="/update/:id" element={<UpdatePoll />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};
