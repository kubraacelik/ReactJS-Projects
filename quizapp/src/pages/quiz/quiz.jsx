import React from "react";
import {useParams} from 'react-router-dom'
import "./quiz.css";

const Quiz = () => {
  const {difficulty, amount} = useParams();
  return <div className="quiz">
    {difficulty} - {amount}
  </div>;
};

export default Quiz;