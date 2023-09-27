import React, { useContext } from "react";
import { GameContext } from "../App";
function ScoreCard() {
  const { scores, skip } = useContext(GameContext);
  return (
    <div className="score-card">
      <div className="d-flex">
        <div className="score-label">Score:</div>
        <div className="score-value">{scores}</div>
      </div>
      <div>
        <h1>
            Guess Word and Fill Blanks
        </h1>
      </div>
      <div className="d-flex">
        <div className="score-label">Skiped:</div>
        <div className="score-value">{skip}</div>
      </div>
    </div>
  );
}

export default ScoreCard;
